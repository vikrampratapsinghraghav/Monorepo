import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [themeColor, setThemeColor] = useState("#ffffff");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    setThemeColor(prev => (prev === "#ffffff" ? "#000000" : "#ffffff"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};