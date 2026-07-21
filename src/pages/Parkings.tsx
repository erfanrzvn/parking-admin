import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import { fetchUserAttributes } from 'aws-amplify/auth';
import type { Schema } from '../amplify/data/resource';
import type { Parking } from '../types';
import './Parkings.css';

const client = generateClient<Schema>();

export default function Parkings() {
  const [parkings, setParkings] = useState<Parking[]>([]);
  const [loading, setLoading] = useState(true);
  const [buildingCode, setBuildingCode] = useState<string>('');
  const [buildingName, setBuildingName] = useState<string>('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const userAttributes = await fetchUserAttributes();
      const userBuildingCode = userAttributes['custom:buildingCode'] || '';
      const userEmail = userAttributes['email'] || '';
      
      if (!userBuildingCode) {
        alert('خطا: کد ساختمان برای کاربر تعریف نشده است');
        setLoading(false);
        return;
      }

      setBuildingCode(userBuildingCode);

      // Get building info
      const buildingsData = await client.models.Building.list({
        filter: { buildingCode: { eq: userBuildingCode } }
      });
      if (buildingsData.data[0]) {
        setBuildingName(buildingsData.data[0].buildingName);
      }

      // Get Admin record to check assigned parkings using raw GraphQL
      let assignedParkingIds: string[] = [];
      
      try {
        const { fetchAuthSession } = await import('aws-amplify/auth');
        const session = await fetchAuthSession();
        const authToken = session.tokens?.idToken?.toString();
        
        if (!authToken) {
          throw new Error('No auth token');
        }

        const response = await fetch('https://dp457mgtrvdkfod6o6mmhpoy74.appsync-api.ca-central-1.amazonaws.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken,
          },
          body: JSON.stringify({
            query: `query GetAdmin($email: String!) {
              listAdmins(filter: {email: {eq: $email}}) {
                items {
                  id
                  assignedParkingIds
                }
              }
            }`,
            variables: { email: userEmail }
          }),
        });

        const result = await response.json();
        console.log('🔍 GraphQL response:', JSON.stringify(result, null, 2));
        
        if (result.data?.listAdmins?.items?.[0]?.assignedParkingIds) {
          assignedParkingIds = result.data.listAdmins.items[0].assignedParkingIds;
        }
      } catch (err) {
        console.error('❌ Error fetching admin:', err);
      }
      
      console.log('🅿️ Extracted assignedParkingIds:', assignedParkingIds);

      // Load parkings - filter by building AND assigned parkings
      const parkingsData = await client.models.Parking.list({
        filter: { buildingCode: { eq: userBuildingCode } }
      });

      // Filter to only show assigned parkings
      let filteredParkings = parkingsData.data as Parking[];
      if (assignedParkingIds.length > 0) {
        filteredParkings = filteredParkings.filter(p => assignedParkingIds.includes(p.id));
      } else {
        // If no parkings assigned, show empty list
        filteredParkings = [];
      }

      setParkings(filteredParkings);
    } catch (error) {
      console.error('Error loading data:', error);
      alert('خطا در بارگذاری اطلاعات');
    } finally {
      setLoading(false);
    }
  };

  const totalLots = parkings.reduce((sum, p) => sum + (p.parkingLots || 0), 0);
  const guestParkings = parkings.filter((p) =>
    p.parkingName?.toLowerCase().includes('guest')
  );

  if (loading) {
    return (
      <div className="page-loading">
        <div className="spinner"></div>
        <p>Loading parkings...</p>
      </div>
    );
  }

  return (
    <div className="parkings-page">
      <div className="page-header">
        <div>
          <h1>🅿️ My Assigned Parkings - {buildingName}</h1>
          <p className="page-subtitle">
            Building: <strong>{buildingCode}</strong> | {parkings.length} assigned parking{parkings.length !== 1 ? 's' : ''}, {totalLots} spots
          </p>
          <p className="info-message">
            ℹ️ These are parkings assigned to you by Super Admin. You can view them but cannot add/edit/delete parkings.
          </p>
        </div>
        <button className="btn-primary" onClick={loadData}>
          🔄 Refresh
        </button>
      </div>

      {/* Remove the form completely */}

      <div className="parking-stats">
        <div className="stat-item">
          <span className="stat-label">Total Parkings:</span>
          <span className="stat-value">{parkings.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Total Spots:</span>
          <span className="stat-value">{totalLots}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Guest Parkings:</span>
          <span className="stat-value">{guestParkings.length}</span>
        </div>
      </div>

      <div className="parkings-list">
        {parkings.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🅿️</div>
            <h3>No parkings assigned</h3>
            <p>Super Admin hasn't assigned any parkings to you yet</p>
          </div>
        ) : (
          <div className="parkings-grid">
            {parkings.map((parking) => {
              const isGuest = parking.parkingName?.toLowerCase().includes('guest');
              return (
                <div key={parking.id} className={`parking-card ${isGuest ? 'guest' : 'resident'}`}>
                  <div className="parking-header">
                    <div>
                      <h3>{parking.parkingNo}</h3>
                      <span className="parking-building">{buildingCode}</span>
                    </div>
                    <div className="parking-type-badge">
                      {isGuest ? '👥 Guest' : '🏠 Resident'}
                    </div>
                  </div>

                  <div className="parking-details">
                    {parking.parkingName && (
                      <div className="detail-row">
                        <span className="detail-icon">📛</span>
                        <span className="detail-value">{parking.parkingName}</span>
                      </div>
                    )}
                    <div className="detail-row">
                      <span className="detail-icon">🅿️</span>
                      <span className="detail-value">
                        {parking.parkingLots || 0} spot{parking.parkingLots !== 1 ? 's' : ''}
                      </span>
                    </div>
                    {parking.description && (
                      <div className="detail-row">
                        <span className="detail-icon">📝</span>
                        <span className="detail-value">{parking.description}</span>
                      </div>
                    )}
                    {parking.createdAt && (
                      <div className="detail-row">
                        <span className="detail-icon">📅</span>
                        <span className="detail-value">
                          Created: {new Date(parking.createdAt).toLocaleDateString('en-CA')}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Removed Edit and Delete buttons - Admin can only view */}
                  <div className="parking-info">
                    <small>ℹ️ Read-only: Only Super Admin can modify parkings</small>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}


