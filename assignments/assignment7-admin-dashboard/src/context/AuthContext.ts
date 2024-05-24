import { createContext, useContext } from 'react';

const initValue = {
  isAuth: false,
  handleLogin: () => {},
  handleLogout: () => {}
}

export const AuthContext = createContext(initValue);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('Auth context is used outside of AuthProvider');

  return context;
};
