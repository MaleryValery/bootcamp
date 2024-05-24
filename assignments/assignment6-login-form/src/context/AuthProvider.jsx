import { useState } from 'react';
import { AuthContext } from './AuthContext';

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const loginHandler = () => {
    console.log('login');
    setIsAuth(true);
  };

  const logoutHandler = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        loginHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
