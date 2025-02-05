import React from 'react';
import ReactDOM from 'react-dom';
import { LanguageProvider, useLanguage } from '../../../../packages/ui/i18n/LanguageContext';
// import '@monorepo/i18n/i18n'; // Import shared i18n config

const LanguageSwitcher = () => {
    const { language, changeLanguage } = useLanguage();
  
    return (
      <div>
        <h1>Current Language: {language}</h1>
        <button onClick={() => changeLanguage('ar')}>Switch to Arabic</button>
        <button onClick={() => changeLanguage('en')}>Switch to English</button>
      </div>
    );
  };

  export default LanguageSwitcher