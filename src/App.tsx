import { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import './amplify-config'; // Import config BEFORE anything else
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Units from './pages/Units';
import Parkings from './pages/Parkings';
import Reservations from './pages/Reservations';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

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
