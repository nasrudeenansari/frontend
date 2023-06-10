import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, settheme] = useState("light");
  const toggleTheme = (value) => {
    var element = document.body;
    settheme(value);
    if (value == "dark-mode") {
      element.classList.add("dark-mode");
    } else {
      element.classList.remove("dark-mode");
    }
  };
  return (
    <div className={`main_container`}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export { ThemeProvider, ThemeContext };
