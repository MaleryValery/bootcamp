import { ReactNode, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { ThemeType } from '../types/Theme';

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('#root')!.classList.add('dark');
    } else {
      document.querySelector('#root')!.classList.remove('dark');
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleChangeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
