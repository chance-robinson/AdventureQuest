import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Play from "./routes/Play";
import Settings from "./routes/Settings";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Navbar_authenticated from "./components/Navbar_authenticated";

const AppLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setIsLoggedIn(!!userData);
    const handleUserLogout = () => {
      setIsLoggedIn(false);
    };
    const handleUserLogin = () => {
      setIsLoggedIn(true);
    };
    window.addEventListener("userLogout", handleUserLogout);
    window.addEventListener("userLogin", handleUserLogin);
    return () => {
      window.removeEventListener("userLogout", handleUserLogout);
      window.removeEventListener("userLogin", handleUserLogin);
    };
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 960) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className={isMobileMenuOpen ? "menu-toggle" : ""}>
        {!isLoggedIn && (
          <Navbar
            toggleMobileMenu={toggleMobileMenu}
            toggled={isMobileMenuOpen}
          />
        )}
        {isLoggedIn && (
          <Navbar_authenticated
            toggleMobileMenu={toggleMobileMenu}
            toggled={isMobileMenuOpen}
          />
        )}
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/play",
        element: <Play />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="page-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
