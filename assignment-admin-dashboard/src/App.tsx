import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AppLayout from './pages/AppLayout';
import Error from './UI/Error';
import AuthProvider from './context/AuthProvider';
import ProtectedRoute from './UI/ProtectedRoute';
import UsersPage from './pages/UsersPage';
import Homepage from './pages/Homepage';
import EditUsersPage from './pages/EditUsersPage';
import CreateUserPage from './pages/CreateUserPage';
import UserProvider from './context/UserProvider';
import { I18nextProvider } from 'react-i18next';
import index from '../src/i18n';

const router = createBrowserRouter([
  {
    path: '/',

    errorElement: <Error />,
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
            path: '/admin',
            children: [
              {
                path: 'users',
                index: true,
                element: <UsersPage />,
              },
              {
                path: 'adduser',
                element: <CreateUserPage />,
              },
              {
                path: 'updateuser',
                element: <EditUsersPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <I18nextProvider i18n={index}>
      <AuthProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </AuthProvider>
    </I18nextProvider>
  );
}

export default App;
