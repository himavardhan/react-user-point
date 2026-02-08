import * as React from "react";

type Theme = "light" | "dark";

type AppThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const AppThemeContext = React.createContext<AppThemeContextType>({
  theme: "light",
  setTheme: (() => {}) as React.Dispatch<React.SetStateAction<Theme>>,
});

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(() => {
    return (localStorage.getItem("app-theme") as Theme) || "light";
  });

  React.useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return (
    <AppThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
};