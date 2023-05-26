import React from "react";
import "./Footer.css";
import AQlogo from "/src/assets/AQlogo.svg";
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai';
import {RiDiscordFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-container">
          <div className="footer-row">
            <a href="/" className="footer-socials">
            <AiFillFacebook/>
            </a>
            <a href="/" className="footer-socials">
            <AiFillInstagram/>
            </a>
            <a href="/" className="footer-socials">
            <AiFillTwitterSquare/>
            </a>
            <a href="/" className="footer-socials">
            <RiDiscordFill/>
            </a>
          </div>
          <div className="footer-row">
            <img src={AQlogo} className="footer-img" alt="AQ Logo" />
          </div>
          <div className="footer-row">
            <p>© 2023 FrostByte Digital LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
