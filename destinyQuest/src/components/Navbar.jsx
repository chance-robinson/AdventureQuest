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

const Navbar = ({ toggleMobileMenu, toggled }) => {

  return (
    <>
      <IconContext.Provider value={{ color: "var(--secondary-color)" }}>
        <nav className="navbar">
          <div className="navbar-container container" >
            <Link to="/" className="navbar-logo" onClick={() => {if (toggled) toggleMobileMenu(); }}>
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
                  onClick={() => {if (toggled) toggleMobileMenu(); }}
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
                  onClick={() => {if (toggled) toggleMobileMenu(); }}
                >
                  <CiPlay1 className="navbar-icon" />
                  Play Now
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={() => {if (toggled) toggleMobileMenu(); }}
                >
                  <CiLogin className="navbar-icon" />
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={() => {if (toggled) toggleMobileMenu(); }}
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
