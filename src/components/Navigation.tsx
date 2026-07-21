import { useState } from 'react';
import './Navigation.css';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onSignOut: () => void;
  userEmail?: string;
  userName?: string;
}

export default function Navigation({ currentPage, onNavigate, onSignOut, userEmail, userName }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'units', label: 'Units', icon: '🏠' },
    { id: 'parkings', label: 'Parkings', icon: '🅿️' },
    { id: 'reservations', label: 'Reservations', icon: '📅' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-header">
        <h1 className="nav-logo">🏢 Building Admin</h1>
        <button 
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => {
              onNavigate(item.id);
              setMenuOpen(false);
            }}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="nav-footer">
        <div className="nav-user">
          <div className="user-avatar">👤</div>
          <div className="user-info">
            <div className="user-name">{userName || 'Admin'}</div>
            <div className="user-email">{userEmail}</div>
          </div>
        </div>
        <button className="nav-signout" onClick={onSignOut}>
          <span className="signout-icon">🚪</span>
          <span className="signout-text">Sign Out</span>
        </button>
      </div>
    </nav>
  );
}
