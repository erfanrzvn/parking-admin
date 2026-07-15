import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import { fetchUserAttributes } from 'aws-amplify/auth';
import type { Schema } from '../../../../shared/amplify/data/resource';
import type { UnitInfo } from '../types';
import './Units.css';

const client = generateClient<Schema>();

export default function Units() {
  const [units, setUnits] = useState<UnitInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [buildingCode, setBuildingCode] = useState<string>('');
  const [buildingName, setBuildingName] = useState<string>('');
  const [formData, setFormData] = useState({
    unitNo: '',
    accessNo: '',
    sakenName: '',
    sakenLastName: '',
    phone: '',
    email: '',
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

      // Get building name
      const buildingsData = await client.models.Building.list({
        filter: { buildingCode: { eq: userBuildingCode } }
      });
      if (buildingsData.data[0]) {
        setBuildingName(buildingsData.data[0].buildingName);
      }

      // Load units for this building only
      const unitsData = await client.models.UnitInfo.list({
        filter: { buildingCode: { eq: userBuildingCode } }
      });
      setUnits(unitsData.data as UnitInfo[]);
    } catch (error) {
      console.error('Error loading data:', error);
      alert('خطا در بارگذاری اطلاعات');
    } finally {
      setLoading(false);
    }
  };

  const generateAccessNo = (unitNo: string) => {
    const timestamp = Date.now().toString().slice(-4);
    return `ACC-${buildingCode}-${unitNo}-${timestamp}`;
  };

  const handleUnitNoChange = (unitNo: string) => {
    if (buildingCode && unitNo) {
      const accessNo = generateAccessNo(unitNo);
      setFormData({ ...formData, unitNo, accessNo });
    } else {
      setFormData({ ...formData, unitNo });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const dataWithBuilding = {
        ...formData,
        buildingCode,
      };

      if (editingId) {
        await client.models.UnitInfo.update({
          id: editingId,
          ...dataWithBuilding,
        });
        alert('✅ واحد با موفقیت ویرایش شد');
      } else {
        await client.models.UnitInfo.create(dataWithBuilding);
        alert('✅ واحد با موفقیت اضافه شد');
      }

      resetForm();
      loadData();
    } catch (error) {
      console.error('Error saving unit:', error);
      alert('❌ خطا در ذخیره واحد');
    }
  };

  const handleEdit = (unit: UnitInfo) => {
    setEditingId(unit.id);
    setFormData({
      unitNo: unit.unitNo,
      accessNo: unit.accessNo,
      sakenName: unit.sakenName,
      sakenLastName: unit.sakenLastName || '',
      phone: unit.phone || '',
      email: unit.email || '',
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string, unitNo: string) => {
    if (!confirm(`آیا از حذف واحد شماره "${unitNo}" اطمینان دارید؟`)) {
      return;
    }

    try {
      await client.models.UnitInfo.delete({ id });
      alert('✅ واحد با موفقیت حذف شد');
      loadData();
    } catch (error) {
      console.error('Error deleting unit:', error);
      alert('❌ خطا در حذف واحد');
    }
  };

  const resetForm = () => {
    setFormData({
      unitNo: '',
      accessNo: '',
      sakenName: '',
      sakenLastName: '',
      phone: '',
      email: '',
    });
    setEditingId(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="page-loading">
        <div className="spinner"></div>
        <p>Loading units...</p>
      </div>
    );
  }

  return (
    <div className="units-page">
      <div className="page-header">
        <div>
          <h1>🏠 Units Management - {buildingName}</h1>
          <p className="page-subtitle">
            Building: <strong>{buildingCode}</strong> | {units.length} unit{units.length !== 1 ? 's' : ''}
          </p>
        </div>
        <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? '❌ Cancel' : '➕ Add Unit'}
        </button>
      </div>

      {showForm && (
        <div className="form-card">
          <h2>{editingId ? '📝 Edit Unit' : '➕ Add New Unit'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="unitNo">Unit Number *</label>
                <input
                  id="unitNo"
                  type="text"
                  required
                  value={formData.unitNo}
                  onChange={(e) => handleUnitNoChange(e.target.value)}
                  placeholder="101"
                  disabled={!!editingId}
                />
                <small>شماره واحد (مثلا 101، 202)</small>
              </div>

              <div className="form-group">
                <label htmlFor="accessNo">Access Code *</label>
                <input
                  id="accessNo"
                  type="text"
                  required
                  value={formData.accessNo}
                  onChange={(e) => setFormData({ ...formData, accessNo: e.target.value })}
                  placeholder={`ACC-${buildingCode}-101-1234`}
                  disabled={!!editingId}
                />
                <small>کد دسترسی (خودکار تولید می‌شود)</small>
              </div>

              <div className="form-group">
                <label htmlFor="sakenName">Resident First Name *</label>
                <input
                  id="sakenName"
                  type="text"
                  required
                  value={formData.sakenName}
                  onChange={(e) => setFormData({ ...formData, sakenName: e.target.value })}
                  placeholder="John"
                />
                <small>نام ساکن</small>
              </div>

              <div className="form-group">
                <label htmlFor="sakenLastName">Resident Last Name</label>
                <input
                  id="sakenLastName"
                  type="text"
                  value={formData.sakenLastName}
                  onChange={(e) => setFormData({ ...formData, sakenLastName: e.target.value })}
                  placeholder="Smith"
                />
                <small>نام خانوادگی (اختیاری)</small>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1-416-555-0123"
                />
                <small>شماره تماس (اختیاری)</small>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="resident@example.com"
                />
                <small>ایمیل (اختیاری)</small>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                {editingId ? '💾 Save Changes' : '✅ Add Unit'}
              </button>
              <button type="button" className="btn-secondary" onClick={resetForm}>
                ❌ Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="units-list">
        {units.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🏠</div>
            <h3>No units yet</h3>
            <p>Click "Add Unit" to create your first residential unit</p>
          </div>
        ) : (
          <div className="units-grid">
            {units.map((unit) => (
              <div key={unit.id} className="unit-card">
                <div className="unit-header">
                  <div>
                    <h3>Unit {unit.unitNo}</h3>
                    <span className="unit-building">{buildingCode}</span>
                  </div>
                  <div className="access-code">{unit.accessNo}</div>
                </div>

                <div className="unit-details">
                  <div className="detail-row">
                    <span className="detail-icon">👤</span>
                    <span className="detail-value">
                      {unit.sakenName} {unit.sakenLastName || ''}
                    </span>
                  </div>
                  {unit.phone && (
                    <div className="detail-row">
                      <span className="detail-icon">📞</span>
                      <span className="detail-value">{unit.phone}</span>
                    </div>
                  )}
                  {unit.email && (
                    <div className="detail-row">
                      <span className="detail-icon">📧</span>
                      <span className="detail-value">{unit.email}</span>
                    </div>
                  )}
                  {unit.createdAt && (
                    <div className="detail-row">
                      <span className="detail-icon">📅</span>
                      <span className="detail-value">
                        Created: {new Date(unit.createdAt).toLocaleDateString('en-CA')}
                      </span>
                    </div>
                  )}
                </div>

                <div className="unit-actions">
                  <button className="btn-icon edit" onClick={() => handleEdit(unit)}>
                    📝 Edit
                  </button>
                  <button
                    className="btn-icon delete"
                    onClick={() => handleDelete(unit.id, unit.unitNo)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
