import React from "react";
import "./Footer.css";
import AQlogo from "/src/assets/AQlogo.svg";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-row">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-socials"
            aria-label="link to facebook"
          >
            <AiFillFacebook />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-socials"
            aria-label="link to instagram"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-socials"
            aria-label="link to twitter"
          >
            <AiFillTwitterSquare />
          </a>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-socials"
            aria-label="link to discord"
          >
            <RiDiscordFill />
          </a>
        </div>
        <div className="footer-row">
          <img src={AQlogo} className="footer-img" alt="AQ Logo"/>
        </div>
        <div className="footer-row">
          <p>© 2023 FrostByte Digital LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
