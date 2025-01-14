import { createContext, useContext, useState } from "react";
import { ThemeType } from "../types";

// Define the theme context
const ThemeContext = createContext<
  { theme: ThemeType; setTheme: (theme: ThemeType) => void } | undefined
>(undefined);

// Define the theme provider
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>("black");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Define the useTheme hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
