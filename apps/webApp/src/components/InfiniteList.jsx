import { useInfiniteScroll } from "../../../../packages/ui/utils/useInfiniteScroll";
import { useEffect, useContext } from "react";
import { LanguageProvider, useLanguage } from '../../../../packages/ui/i18n/LanguageContext';
import { ThemeContext } from "../../../../packages/ui/utils/ThemeContext";


const InfiniteList = () => {
  const { data, loadMore, loading } = useInfiniteScroll();
    const { theme, toggleTheme, themeColor, setThemeColor } = useContext(ThemeContext);
   const { language, changeLanguage } = useLanguage();
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !loading
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMore, loading]);

  return (
    <div style={{   direction: language === "ar" ? "rtl" : "ltr",
      textAlign: language === "ar" ? "right" : "left", padding: "20px", maxWidth: "400px", margin: "auto" }}>
    
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {data.map((item) => (
         <li
         key={item.id}
         style={{
           padding: "10px",
           borderBottom: `1px solid ${theme === "dark" ? "#555" : "#ddd"}`,
           backgroundColor: theme === "dark" ? "#333" : themeColor,
           color: theme === "dark" ? "#fff" : "#000",
           transition: "background 0.3s ease-in-out, color 0.3s ease-in-out",
         }}
       >
         {item.title}
       </li>
        ))}
      </ul>
     
      <div id="scroll-trigger" style={{ height: "20px" }}></div>
    </div>
  );

  
};

export default InfiniteList;