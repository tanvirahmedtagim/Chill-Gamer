import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      document.documentElement.className = theme;
    }
  }, [theme, location.pathname]);

  const isHomeRoute = location.pathname === "/";

  return (
    <div
      className={`${
        isHomeRoute && theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-900"
      } min-h-screen flex flex-col`}
    >
      <Navbar toggleTheme={toggleTheme} theme={isHomeRoute ? theme : "light"} />

      <div className="w-11/12 mx-auto flex-1">
        <Outlet context={{ theme }} />
      </div>
      <Footer theme={isHomeRoute ? theme : "light"} />
    </div>
  );
};

export default MainLayout;
