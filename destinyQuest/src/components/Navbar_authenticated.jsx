import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import AQlogo from "/src/assets/AQlogo.svg";
import { IconContext } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";
import { CiPlay1 } from "react-icons/ci";
import { FaTimes, FaBars } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdOutlineLogout } from "react-icons/md";

const handleLogout = () => {
  localStorage.removeItem("user");
  window.dispatchEvent(new Event("userLogout"));
};

const Navbar_authenticated = ({ toggleMobileMenu, toggled }) => {
  const handleLinkClick = () => {
    if (toggled) {
      toggleMobileMenu();
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: "var(--secondary-color)" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
              <img src={AQlogo} className="navbar-img" />
            </Link>
            <div className="menu-icon" onClick={toggleMobileMenu}>
              {toggled ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={toggled ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={handleLinkClick}
                >
                  <AiOutlineHome className="navbar-icon" />
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/play"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={handleLinkClick}
                >
                  <CiPlay1 className="navbar-icon" />
                  Play Now
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={handleLinkClick}
                >
                  <FiSettings className="navbar-icon" />
                  Settings
                </NavLink>
              </li>
              <li className="nav-item">
                <Link to="/" onClick={handleLogout} className="nav-links">
                  <MdOutlineLogout className="navbar-icon" />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar_authenticated;
