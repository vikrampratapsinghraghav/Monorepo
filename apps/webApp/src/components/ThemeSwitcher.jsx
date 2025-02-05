import React, { useContext } from "react";
// import { ThemeContext } from "../../../packages/ui/utils/ThemeContext";
import { ThemeContext } from "../../../../packages/ui/utils/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme, themeColor, setThemeColor } = useContext(ThemeContext);
 // Change the background color of the whole page when the theme changes
//  useEffect(() => {
//     document.body.style.backgroundColor = theme === "dark" ? "#000" : themeColor;
//     document.body.style.color = theme === "dark" ? "#fff" : "#000";
//   }, [theme, themeColor]);
 
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#000" : themeColor,
        color: theme === "dark" ? "#fff" : "#000",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        maxWidth: "300px",
        margin: "20px auto",
        textAlign: "center",
        transition: "background 0.3s ease-in-out",
      }}
    >
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme} style={{ marginBottom: "10px", padding: "10px" }}>
        Toggle Theme
      </button>

      {/* Theme Color Options */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
        <button onClick={() => setThemeColor("#FF5733")} style={{ background: "#FF5733", color: "#fff", padding: "10px", border: "none", cursor: "pointer", borderRadius: "5px" }}>Red</button>
        <button onClick={() => setThemeColor("#3498DB")} style={{ background: "#3498DB", color: "#fff", padding: "10px", border: "none", cursor: "pointer", borderRadius: "5px" }}>Blue</button>
        <button onClick={() => setThemeColor("#2ECC71")} style={{ background: "#2ECC71", color: "#fff", padding: "10px", border: "none", cursor: "pointer", borderRadius: "5px" }}>Green</button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;