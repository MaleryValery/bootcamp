import { Navigate } from 'react-router';
import { useAuth } from './context/AuthContext';

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ path, element }) {
  const { isAuth } = useAuth();
  if (isAuth) return element;

  return <Navigate to={path} />;
}

export default ProtectedRoute;
