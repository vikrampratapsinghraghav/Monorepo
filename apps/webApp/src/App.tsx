
import InfiniteList from "./components/InfiniteList";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ThemeSwitcher from "./components/ThemeSwitcher";

import { LanguageProvider, useLanguage } from '../../../packages/ui/i18n/LanguageContext';
import { ThemeProvider } from '../../../packages/ui/utils/ThemeContext';


function App() {
  return (
    <div>
    <ThemeProvider>
      <LanguageProvider>
        <ThemeSwitcher />
        <LanguageSwitcher />
        <InfiniteList />
      </LanguageProvider>
    </ThemeProvider>
    </div>
  );
  return (
    <div style={{ padding: "20px" }}>
      <InfiniteList />
    </div>
  );
}

export default App;