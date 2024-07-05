import React from "react";
import PaymentMethods from "../PaymentMethods/PaymentMethods";
import "@styles/Footer/Footer.css";
import logo from "@public/wz_light.svg";

import facebook from "@images/Social/facebook.svg";
import instagram from "@images/Social/instagram.svg";
import twitter from "@images/Social/twitter.svg";
import discord from "@images/Social/discord.svg";
import star from "@images/star.svg";

const Footer: React.FC = () => {
  const renderStars = (count: number) =>
    Array.from({ length: count }, (_, index) => (
      <img key={index} src={star} alt="Star" className="star" />
    ));

  return (
    <div>
      <PaymentMethods />
      <footer className="footer">
        <div className="footer-social">
          <img src={facebook} alt="Facebook" aria-label="Facebook" />
          <img src={instagram} alt="Instagram" aria-label="Instagram" />
          <img src={twitter} alt="Twitter" aria-label="Twitter" />
          <img src={discord} alt="Discord" aria-label="Discord" />
        </div>
        <div className="footer-divider"></div>
        <div className="footer-content">
          <div className="footer-section">
            <img src={logo} alt="MW Logo" />
            <p>support@chicksgold.com</p>
          </div>
          <div className="footer-section">
            <h4>Chicks Gold</h4>
            <ul>
              <li>Games</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Copyright Policy</li>
            </ul>
          </div>
          <div className="footer-section footer-stars">
            {renderStars(5)}
            <p className="footer-rating-text">Truspilot Reviews</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Adrian Hidalgo. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
