import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useAuth } from '../context/AuthContext';

function Home() {
  const { logoutHandler } = useAuth();
  const location = useLocation();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setUserName(location.state.username);
  }, [location.state.username, setUserName]);

  return (
    <div>
      <h1>Hello {userName}</h1>
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
}

export default Home;
