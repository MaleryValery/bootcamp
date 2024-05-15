import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AppLayout from './pages/AppLayout';
import AuthProvider from './context/AuthProvider';
import ProtectedRoute from './UI/ProtectedRoute';
import UsersPage from './pages/UsersPage';
import Homepage from './pages/Homepage';
import EditUsersPage from './pages/EditUsersPage';
import UpdateUsersPage from './pages/UpdateUsersPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },

      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        element: <ProtectedRoute path={'/login'} />,
        children: [
          {
            path: 'users',
            element: <UsersPage />,
          },
          {
            path: 'adduser',
            element: <EditUsersPage />,
          },
          {
            path: 'updateuser',
            element: <UpdateUsersPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
