import { createContext, useContext } from 'react';
import { ThemeType } from '../types/Theme';

type initValueType = {
  theme: ThemeType;
  handleChangeTheme: () => void;
};
const initValue: initValueType = {
  theme: 'dark',
  handleChangeTheme: () => {},
};

export const ThemeContext = createContext(initValue);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error('Theme context is used outside of Theme Provider');

  return context;
};
