import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeProvider } from "../context/theme";
import Header from "../components/Header";

const HomeLayout = () => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Header />
      <section className="min-h-screen bg-gray-100 dark:bg-gray-800">
        <Outlet />
      </section>
    </ThemeProvider>
  );
};
export default HomeLayout;
