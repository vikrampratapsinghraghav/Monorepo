import React, { createContext, useState, useContext } from 'react';
import i18next from './i18n';


const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18next.language || 'en');

  const changeLanguage = (lang) => {
    console.log('lang',lang)
    i18next.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);