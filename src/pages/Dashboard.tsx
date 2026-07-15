import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import { fetchUserAttributes } from 'aws-amplify/auth';
import type { Schema } from '../amplify/data/resource';
import './Dashboard.css';

const client = generateClient<Schema>();

interface Stats {
  buildingName: string;
  buildingCode: string;
  totalUnits: number;
  totalParkings: number;
  totalReservations: number;
  activeReservations: number;
  residentParkings: number;
  guestParkings: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    buildingName: '',
    buildingCode: '',
    totalUnits: 0,
    totalParkings: 0,
    totalReservations: 0,
    activeReservations: 0,
    residentParkings: 0,
    guestParkings: 0,
  });
  const [loading, setLoading] = useState(true);
  const [buildingCode, setBuildingCode] = useState<string>('');

  useEffect(() => {
    loadBuildingAndStats();
  }, []);

  const loadBuildingAndStats = async () => {
    setLoading(true);
    try {
      // Get user's building code from custom attributes
      const userAttributes = await fetchUserAttributes();
      const userBuildingCode = userAttributes['custom:buildingCode'] || '';
      
      if (!userBuildingCode) {
        alert('خطا: کد ساختمان برای کاربر تعریف نشده است');
        setLoading(false);
        return;
      }

      setBuildingCode(userBuildingCode);

      // Load building info
      const buildingsData = await client.models.Building.list({
        filter: { buildingCode: { eq: userBuildingCode } }
      });
      const building = buildingsData.data[0];

      // Load filtered data for this building only
      const [units, parkings, reservations] = await Promise.all([
        client.models.UnitInfo.list({
          filter: { buildingCode: { eq: userBuildingCode } }
        }),
        client.models.Parking.list({
          filter: { buildingCode: { eq: userBuildingCode } }
        }),
        client.models.Reserving.list(),
      ]);

      // Filter reservations for parkings in this building
      const buildingParkingNos = parkings.data.map(p => p.parkingNo);
      const buildingReservations = reservations.data.filter(r => 
        buildingParkingNos.includes(r.parkingNo)
      );

      // Calculate active reservations
      const now = new Date();
      const activeReservations = buildingReservations.filter((r) => {
        const reservationDate = new Date(r.dateTime);
        const endDate = new Date(reservationDate.getTime() + (r.duration || 0) * 60000);
        return now >= reservationDate && now <= endDate;
      }).length;

      // Count resident vs guest parkings
      const residentParkings = parkings.data.filter(p => 
        !p.parkingName?.toLowerCase().includes('guest')
      ).length;
      const guestParkings = parkings.data.filter(p => 
        p.parkingName?.toLowerCase().includes('guest')
      ).length;

      setStats({
        buildingName: building?.buildingName || 'N/A',
        buildingCode: userBuildingCode,
        totalUnits: units.data.length,
        totalParkings: parkings.data.length,
        totalReservations: buildingReservations.length,
        activeReservations,
        residentParkings,
        guestParkings,
      });
    } catch (error) {
      console.error('Error loading stats:', error);
      alert('خطا در بارگذاری اطلاعات');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>📊 Dashboard - {stats.buildingName}</h1>
          <p className="dashboard-subtitle">
            Building Code: <strong>{stats.buildingCode}</strong>
          </p>
        </div>
        <button className="btn-refresh" onClick={loadBuildingAndStats}>
          🔄 Refresh
        </button>
      </div>

      <div className="building-info-card">
        <h2>🏢 Your Building</h2>
        <div className="building-details">
          <div className="detail">
            <span className="label">Building Name:</span>
            <span className="value">{stats.buildingName}</span>
          </div>
          <div className="detail">
            <span className="label">Building Code:</span>
            <span className="value">{stats.buildingCode}</span>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card units">
          <div className="stat-icon">🏠</div>
          <div className="stat-content">
            <h3>Total Units</h3>
            <p className="stat-value">{stats.totalUnits}</p>
            <p className="stat-label">Residential units</p>
          </div>
        </div>

        <div className="stat-card parkings">
          <div className="stat-icon">🅿️</div>
          <div className="stat-content">
            <h3>Total Parkings</h3>
            <p className="stat-value">{stats.totalParkings}</p>
            <p className="stat-label">
              {stats.residentParkings} Resident + {stats.guestParkings} Guest
            </p>
          </div>
        </div>

        <div className="stat-card reservations">
          <div className="stat-icon">📅</div>
          <div className="stat-content">
            <h3>Total Reservations</h3>
            <p className="stat-value">{stats.totalReservations}</p>
            <p className="stat-label">All time reservations</p>
          </div>
        </div>

        <div className="stat-card active">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>Active Now</h3>
            <p className="stat-value">{stats.activeReservations}</p>
            <p className="stat-label">Current reservations</p>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <h2>⚡ Quick Actions</h2>
        <div className="action-buttons">
          <button className="action-btn primary">
            <span className="action-icon">🏠</span>
            <span className="action-label">Add Unit</span>
          </button>
          <button className="action-btn secondary">
            <span className="action-icon">🅿️</span>
            <span className="action-label">Add Parking</span>
          </button>
          <button className="action-btn secondary">
            <span className="action-icon">📅</span>
            <span className="action-label">View Reservations</span>
          </button>
        </div>
      </div>
    </div>
  );
}
