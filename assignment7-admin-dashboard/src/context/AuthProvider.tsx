import { ReactNode, useState } from 'react';
import { AuthContext } from './AuthContext';

function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => {
    setIsAuth(true);
  };
  const handleLogout = () => {
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
