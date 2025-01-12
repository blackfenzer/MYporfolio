import { useState, useEffect } from 'react';

type ThemeType = 'light' | 'dark' | 'purple';

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    return (localStorage.getItem('theme') as ThemeType) || 'light';
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
};