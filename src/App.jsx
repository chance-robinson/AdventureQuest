import { useState, useEffect, lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import "./index.css";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
const Login = lazy(() => import("./routes/Login"));
const Register = lazy(() => import("./routes/Register"));
const Play = lazy(() => import("./routes/Play"));
const Settings = lazy(() => import("./routes/Settings"));


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
      console.log("logged out");
    };
    const handleUserLogin = () => {
      setIsLoggedIn(true);
      console.log("logged in");
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
        <Navbar
          toggleMobileMenu={toggleMobileMenu}
          toggled={isMobileMenuOpen}
          loggedIn={isLoggedIn}
        />
      </div>
      <Suspense>
        <Outlet fallback={<h1>Still Loading...</h1>}/>
      </Suspense>
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
