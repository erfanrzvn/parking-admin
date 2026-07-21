import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import { fetchUserAttributes } from 'aws-amplify/auth';
import type { Schema } from '../amplify/data/resource';
import type { Reserving } from '../types';
import './Reservations.css';

const client = generateClient<Schema>();

export default function Reservations() {
  const [reservations, setReservations] = useState<Reserving[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'active' | 'upcoming' | 'past'>('all');
  const [buildingCode, setBuildingCode] = useState<string>('');
  const [buildingName, setBuildingName] = useState<string>('');

  useEffect(() => {
    loadReservations();
  }, []);

  const loadReservations = async () => {
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

      // Get building name
      const buildingsData = await client.models.Building.list({
        filter: { buildingCode: { eq: userBuildingCode } }
      });
      if (buildingsData.data[0]) {
        setBuildingName(buildingsData.data[0].buildingName);
      }

      // Get Admin record to check assigned parkings
      console.log('🔍 Loading admin record for email:', userEmail);
      const adminData = await client.models.Admin.list({
        filter: { email: { eq: userEmail } }
      });

      console.log('📊 Admin data from DynamoDB:', adminData.data);

      let assignedParkingIds: string[] = [];
      if (adminData.data[0] && adminData.data[0].assignedParkingIds) {
        assignedParkingIds = adminData.data[0].assignedParkingIds;
      }

      console.log('🅿️ Assigned parking IDs:', assignedParkingIds);

      // Get parkings for this building - filtered by assigned parkings
      const parkingsData = await client.models.Parking.list({
        filter: { buildingCode: { eq: userBuildingCode } }
      });

      // Filter to only assigned parkings
      let assignedParkings = parkingsData.data;
      console.log('📦 All parkings for building:', assignedParkings.length);
      
      if (assignedParkingIds.length > 0) {
        assignedParkings = assignedParkings.filter(p => assignedParkingIds.includes(p.id));
        console.log('✅ Filtered to assigned parkings:', assignedParkings.length);
      } else {
        console.log('⚠️ No parkings assigned to this admin');
        assignedParkings = [];
      }

      const buildingParkingNos = assignedParkings.map(p => p.parkingNo);
      console.log('🅿️ Building parking numbers:', buildingParkingNos);

      // Get all reservations and filter by assigned parkings only
      const { data } = await client.models.Reserving.list();
      const buildingReservations = (data as Reserving[]).filter(r =>
        buildingParkingNos.includes(r.parkingNo)
      );

      // Sort by dateTime descending
      const sorted = buildingReservations.sort(
        (a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
      );
      setReservations(sorted);
    } catch (error) {
      console.error('Error loading reservations:', error);
      alert('خطا در بارگذاری رزروها');
    } finally {
      setLoading(false);
    }
  };

  const getReservationStatus = (dateTime: string, duration?: number | null) => {
    const now = new Date();
    const startDate = new Date(dateTime);
    const endDate = new Date(startDate.getTime() + (duration || 0) * 60000);

    if (now < startDate) {
      return 'upcoming';
    } else if (now >= startDate && now <= endDate) {
      return 'active';
    } else {
      return 'past';
    }
  };

  const filteredReservations = reservations.filter((r) => {
    if (filter === 'all') return true;
    return getReservationStatus(r.dateTime, r.duration) === filter;
  });

  const stats = {
    total: reservations.length,
    active: reservations.filter((r) => getReservationStatus(r.dateTime, r.duration) === 'active')
      .length,
    upcoming: reservations.filter(
      (r) => getReservationStatus(r.dateTime, r.duration) === 'upcoming'
    ).length,
    past: reservations.filter((r) => getReservationStatus(r.dateTime, r.duration) === 'past')
      .length,
  };

  if (loading) {
    return (
      <div className="page-loading">
        <div className="spinner"></div>
        <p>Loading reservations...</p>
      </div>
    );
  }

  return (
    <div className="reservations-page">
      <div className="page-header">
        <div>
          <h1>📅 Reservations - {buildingName}</h1>
          <p className="page-subtitle">
            Building: <strong>{buildingCode}</strong> | View parking reservations (read-only)
          </p>
        </div>
        <button className="btn-primary" onClick={loadReservations}>
          🔄 Refresh
        </button>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-label">Total</span>
          <span className="stat-value total">{stats.total}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Active Now</span>
          <span className="stat-value active">{stats.active}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Upcoming</span>
          <span className="stat-value upcoming">{stats.upcoming}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Past</span>
          <span className="stat-value past">{stats.past}</span>
        </div>
      </div>

      <div className="filter-tabs">
        <button
          className={`tab ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({stats.total})
        </button>
        <button
          className={`tab ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          ✅ Active ({stats.active})
        </button>
        <button
          className={`tab ${filter === 'upcoming' ? 'active' : ''}`}
          onClick={() => setFilter('upcoming')}
        >
          🔜 Upcoming ({stats.upcoming})
        </button>
        <button
          className={`tab ${filter === 'past' ? 'active' : ''}`}
          onClick={() => setFilter('past')}
        >
          ✔️ Past ({stats.past})
        </button>
      </div>

      <div className="reservations-list">
        {filteredReservations.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📅</div>
            <h3>No reservations yet</h3>
            <p>Guest reservations will appear here once created</p>
          </div>
        ) : (
          <div className="reservations-grid">
            {filteredReservations.map((reservation) => {
              const status = getReservationStatus(reservation.dateTime, reservation.duration);
              const startDate = new Date(reservation.dateTime);
              const endDate = new Date(
                startDate.getTime() + (reservation.duration || 0) * 60000
              );

              return (
                <div key={reservation.id} className={`reservation-card ${status}`}>
                  <div className="reservation-header">
                    <div>
                      <h3>{reservation.parkingNo}</h3>
                      <span className="status-badge">{status}</span>
                    </div>
                    <div className="access-code">{reservation.accessNo}</div>
                  </div>

                  <div className="reservation-details">
                    <div className="detail-row">
                      <span className="detail-icon">📅</span>
                      <div className="detail-content">
                        <strong>Start:</strong> {startDate.toLocaleString('en-CA')}
                      </div>
                    </div>

                    {reservation.duration && (
                      <div className="detail-row">
                        <span className="detail-icon">⏱️</span>
                        <div className="detail-content">
                          <strong>Duration:</strong> {reservation.duration} minutes
                          <br />
                          <strong>End:</strong> {endDate.toLocaleString('en-CA')}
                        </div>
                      </div>
                    )}

                    {reservation.vehicleCode && (
                      <div className="detail-row">
                        <span className="detail-icon">🚗</span>
                        <div className="detail-content">
                          <strong>Vehicle:</strong> {reservation.vehicleCode}
                        </div>
                      </div>
                    )}

                    {reservation.phone && (
                      <div className="detail-row">
                        <span className="detail-icon">📞</span>
                        <div className="detail-content">{reservation.phone}</div>
                      </div>
                    )}

                    {reservation.email && (
                      <div className="detail-row">
                        <span className="detail-icon">📧</span>
                        <div className="detail-content">{reservation.email}</div>
                      </div>
                    )}

                    <div className="detail-row">
                      <span className="detail-icon">🕐</span>
                      <div className="detail-content">
                        <strong>Created:</strong>{' '}
                        {reservation.createdAt
                          ? new Date(reservation.createdAt).toLocaleString('en-CA')
                          : 'N/A'}
                      </div>
                    </div>
                  </div>

                  <div className="reservation-info">
                    <small>ℹ️ Admins can view reservations but cannot modify them</small>
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


