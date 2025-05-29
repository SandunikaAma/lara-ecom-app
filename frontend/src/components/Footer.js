import React from "react";
import "../App.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>

      <div className="cookie-policy">
        <a href="/cookie-settings">Cookie Settings</a>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Lara Fashion. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
