import React from "react";
import "./Footer.css";
import AQlogo from '/src/assets/AQlogo.svg'

const Footer = () => {
  return (
    <>
      <footer id='footer'>
        <div className="footer-container">
          <div className="footer-column">
            <img src={AQlogo} className="footer-img"/>
          </div>
          <div className="footer-column">
            <h3>Socials</h3>
            <p>item</p>
            <p>item</p>
            <p>item</p>
          </div>
          <div className="footer-column">
            <h3>Other</h3>
            <p>item</p>
            <p>item</p>
            <p>item</p>
          </div>
        </div>
        <div id="copyright">© 2023 FrostByte Digital LLC. All rights reserved.</div>
      </footer>
    </>
  );
};

export default Footer;