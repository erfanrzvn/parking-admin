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
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [buildingCode, setBuildingCode] = useState<string>('');
  const [buildingName, setBuildingName] = useState<string>('');
  const [buildingNo, setBuildingNo] = useState<string>('');
  const [formData, setFormData] = useState({
    parkingName: '',
    parkingNo: '',
    parkingLots: 1,
    description: '',
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const userAttributes = await fetchUserAttributes();
      const userBuildingCode = userAttributes['custom:buildingCode'] || '';
      
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
        setBuildingNo(buildingsData.data[0].buildingNo);
      }

      // Load parkings for this building only
      const parkingsData = await client.models.Parking.list({
        filter: { buildingCode: { eq: userBuildingCode } }
      });
      setParkings(parkingsData.data as Parking[]);
    } catch (error) {
      console.error('Error loading data:', error);
      alert('خطا در بارگذاری اطلاعات');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const dataWithBuilding = {
        ...formData,
        buildingCode,
        buildingName,
        buildingNo,
      };

      if (editingId) {
        await client.models.Parking.update({
          id: editingId,
          ...dataWithBuilding,
        });
        alert('✅ پارکینگ با موفقیت ویرایش شد');
      } else {
        await client.models.Parking.create(dataWithBuilding);
        alert('✅ پارکینگ با موفقیت اضافه شد');
      }

      resetForm();
      loadData();
    } catch (error) {
      console.error('Error saving parking:', error);
      alert('❌ خطا در ذخیره پارکینگ');
    }
  };

  const handleEdit = (parking: Parking) => {
    setEditingId(parking.id);
    setFormData({
      parkingName: parking.parkingName || '',
      parkingNo: parking.parkingNo,
      parkingLots: parking.parkingLots || 1,
      description: parking.description || '',
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string, parkingNo: string) => {
    if (!confirm(`آیا از حذف پارکینگ "${parkingNo}" اطمینان دارید؟`)) {
      return;
    }

    try {
      await client.models.Parking.delete({ id });
      alert('✅ پارکینگ با موفقیت حذف شد');
      loadData();
    } catch (error) {
      console.error('Error deleting parking:', error);
      alert('❌ خطا در حذف پارکینگ');
    }
  };

  const resetForm = () => {
    setFormData({
      parkingName: '',
      parkingNo: '',
      parkingLots: 1,
      description: '',
    });
    setEditingId(null);
    setShowForm(false);
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
          <h1>🅿️ Parkings Management - {buildingName}</h1>
          <p className="page-subtitle">
            Building: <strong>{buildingCode}</strong> | {parkings.length} parking{parkings.length !== 1 ? 's' : ''}, {totalLots} spots
          </p>
        </div>
        <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? '❌ Cancel' : '➕ Add Parking'}
        </button>
      </div>

      {showForm && (
        <div className="form-card">
          <h2>{editingId ? '📝 Edit Parking' : '➕ Add New Parking'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="parkingNo">Parking Number *</label>
                <input
                  id="parkingNo"
                  type="text"
                  required
                  value={formData.parkingNo}
                  onChange={(e) => setFormData({ ...formData, parkingNo: e.target.value })}
                  placeholder="P-101 or G-01"
                  disabled={!!editingId}
                />
                <small>شماره پارکینگ (P-101 برای ساکنین، G-01 برای مهمان)</small>
              </div>

              <div className="form-group">
                <label htmlFor="parkingName">Parking Name</label>
                <input
                  id="parkingName"
                  type="text"
                  value={formData.parkingName}
                  onChange={(e) => setFormData({ ...formData, parkingName: e.target.value })}
                  placeholder="Resident Parking or Guest Parking"
                />
                <small>نام پارکینگ (اختیاری)</small>
              </div>

              <div className="form-group">
                <label htmlFor="parkingLots">Number of Spots *</label>
                <input
                  id="parkingLots"
                  type="number"
                  min="1"
                  required
                  value={formData.parkingLots}
                  onChange={(e) =>
                    setFormData({ ...formData, parkingLots: parseInt(e.target.value) })
                  }
                  placeholder="1"
                />
                <small>تعداد جاهای پارک</small>
              </div>

              <div className="form-group full-width">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Assigned to Unit 101 or Available for guest reservations"
                  rows={3}
                />
                <small>توضیحات (اختیاری)</small>
              </div>
            </div>

            <div className="parking-type-hint">
              <h4>💡 نکات مهم:</h4>
              <ul>
                <li>
                  <strong>Resident Parking:</strong> شماره با P- شروع شود (مثلا P-101، P-102)
                </li>
                <li>
                  <strong>Guest Parking:</strong> شماره با G- شروع و نام شامل "Guest" باشد (مثلا G-01)
                </li>
                <li>پارکینگ های Guest برای رزرو عمومی در دسترس هستند</li>
              </ul>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                {editingId ? '💾 Save Changes' : '✅ Add Parking'}
              </button>
              <button type="button" className="btn-secondary" onClick={resetForm}>
                ❌ Cancel
              </button>
            </div>
          </form>
        </div>
      )}

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
            <h3>No parkings yet</h3>
            <p>Click "Add Parking" to create your first parking space</p>
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

                  <div className="parking-actions">
                    <button className="btn-icon edit" onClick={() => handleEdit(parking)}>
                      📝 Edit
                    </button>
                    <button
                      className="btn-icon delete"
                      onClick={() => handleDelete(parking.id, parking.parkingNo)}
                    >
                      🗑️ Delete
                    </button>
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
