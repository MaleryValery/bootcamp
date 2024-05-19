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
import ThemeProvider from './context/ThemeProvider';

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
                path: 'viewUsers',
                index: true,
                element: <UsersPage />,
              },
              {
                path: 'createUsers',
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
      <ThemeProvider>
      <AuthProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </AuthProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
