import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

type RouteType = {
  path: string;
  // element: ReactNode;
};

function ProtectedRoute({ path }: RouteType) {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={path} replace />;
}

export default ProtectedRoute;
