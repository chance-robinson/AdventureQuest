import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom' 
import './Navbar.css'
import AQlogo from '/src/assets/AQlogo.png'
import { IconContext } from 'react-icons'
import {AiOutlineHome} from "react-icons/ai"
import {CiLogin} from "react-icons/ci"
import {BsPersonAdd} from "react-icons/bs"
import {CiPlay1} from "react-icons/ci"
import {FaTimes,FaBars} from "react-icons/fa"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <>
    <IconContext.Provider value={{ color: "#fff" }}>
    <nav className='navbar'>
        <div className='navbar-container container'>
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                <img src={AQlogo}/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                        "nav-links" + (isActive ? " activated" : "")
                        }
                        onClick={closeMobileMenu}
                    >
                       <AiOutlineHome className='navbar-icon'/>Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/play"
                        className={({ isActive }) =>
                        "nav-links" + (isActive ? " activated" : "")
                        }
                        onClick={closeMobileMenu}
                    >
                       <CiPlay1 className='navbar-icon'/>Play Now
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                        "nav-links" + (isActive ? " activated" : "")
                        }
                        onClick={closeMobileMenu}
                    >
                       <CiLogin className='navbar-icon'/>Login
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                        "nav-links" + (isActive ? " activated" : "")
                        }
                        onClick={closeMobileMenu}
                    >
                       <BsPersonAdd className='navbar-icon'/>Register
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar