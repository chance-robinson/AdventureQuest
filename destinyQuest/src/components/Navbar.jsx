import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import AQlogo from "/src/assets/AQlogo.svg";
import { IconContext } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { BsPersonAdd } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
import { FaTimes, FaBars } from "react-icons/fa";

const iconContextValue = { color: "var(--secondary-color)" };

const Navbar = ({ toggleMobileMenu, toggled }) => {
  const handleLinkClick = () => {
    if (toggled) {
      toggleMobileMenu();
    }
  };

  return (
    <>
      <IconContext.Provider value={iconContextValue}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
              <img src={AQlogo} className="navbar-img" />
            </Link>
            <div className="menu-icon" onClick={toggleMobileMenu}>
              {toggled ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={toggled ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item" >
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
              <li className="nav-item" >
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
              <li className="nav-item" >
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={handleLinkClick}
                >
                  <CiLogin className="navbar-icon" />
                  Login
                </NavLink>
              </li>
              <li className="nav-item" >
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={handleLinkClick}
                >
                  <BsPersonAdd className="navbar-icon" />
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;