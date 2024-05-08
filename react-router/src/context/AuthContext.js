import { createContext, useContext } from 'react';

export const AuthContext = createContext({
  isAuth: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error('Auth context is used outside Auth provider');

  return context;
};
