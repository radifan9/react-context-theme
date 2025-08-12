import { ThemeContext } from "./themeContext";

// Use custom hook
import useLocalStorage from "../../hooks/useLocalStorage";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("koda3:theme", "light");

  const toggleTheme = () => {
    setTheme((theme) => {
      if (theme === "light") return "dark";
      return "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
