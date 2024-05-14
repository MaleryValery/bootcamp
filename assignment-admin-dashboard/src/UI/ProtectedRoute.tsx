import { ReactNode } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

type RouteType = {
  path: string;
  element: ReactNode;
};

function ProtectedRoute({ path, element }: RouteType) {
  const { isAuth } = useAuth();

  return isAuth ? element : <Navigate to={path} replace />;
}

export default ProtectedRoute;
