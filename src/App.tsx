import { useState, useEffect } from 'react';
import { signOut, getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';
import './App.css';
import './amplify-config';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Units from './pages/Units';
import Parkings from './pages/Parkings';
import Reservations from './pages/Reservations';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      const session = await fetchAuthSession({ forceRefresh: true });
      
      console.log('🔑 Auth session:', {
        tokens: session.tokens ? 'Present' : 'Missing',
        credentials: session.credentials ? 'Present' : 'Missing',
        identityId: session.identityId
      });
      
      const groups = session.tokens?.accessToken?.payload['cognito:groups'];
      console.log('👥 User groups:', groups);
      
      setUser(currentUser);
    } catch (err) {
      console.log('No user signed in');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
      setCurrentPage('dashboard');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleSignIn = () => {
    checkUser();
  };

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

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div>Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Login onSignIn={handleSignIn} />;
  }

  return (
    <div className="app-container">
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onSignOut={handleSignOut}
        userEmail={user?.signInDetails?.loginId || user?.username}
        userName={user?.username || 'Admin'}
      />
      <main className="app-main">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
