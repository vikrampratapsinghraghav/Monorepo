
import InfiniteList from "./components/InfiniteList";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ThemeSwitcher from "./components/ThemeSwitcher";

import { LanguageProvider } from '../../../packages/ui/i18n/LanguageContext';
import { ThemeProvider } from '../../../packages/ui/utils/ThemeContext';


function App() {
  return (
  
    <ThemeProvider>
      <LanguageProvider>
        <ThemeSwitcher />
        <LanguageSwitcher />
        <InfiniteList />
      </LanguageProvider>
    </ThemeProvider>
    
  );
 
}

export default App;