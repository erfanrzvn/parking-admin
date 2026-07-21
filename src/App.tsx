import { useState, useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Units from './pages/Units';
import Parkings from './pages/Parkings';
import Reservations from './pages/Reservations';
import { Amplify } from 'aws-amplify';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    // Configure Amplify on component mount
    fetch('/amplify_outputs.json')
      .then(res => res.json())
      .then(config => {
        Amplify.configure(config);
        setIsConfigured(true);
        console.log('✅ Amplify configured successfully');
      })
      .catch(err => {
        console.error('❌ Failed to load amplify_outputs.json:', err);
      });
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'units':
        return <Units />;
      case 'parkings':
        return <Parkings />;
      case 'reservations':
        return <Reservations />;
      default:
        return <Dashboard />;
    }
  };

  if (!isConfigured) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '18px' }}>
        <div>⏳ Loading configuration...</div>
      </div>
    );
  }

  return (
    <Authenticator
      formFields={{
        signIn: {
          username: {
            label: 'Email',
            placeholder: 'admin@building.com',
          },
        },
      }}
    >
      {({ signOut, user }) => (
        <div className="app-container">
          <Navigation
            currentPage={currentPage}
            onNavigate={setCurrentPage}
            onSignOut={signOut!}
            userEmail={user?.signInDetails?.loginId}
          />
          <main className="app-main">
            {renderPage()}
          </main>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
