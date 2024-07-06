import React, { useState } from "react";
import "@styles/Header/Header.css";
import logo from "@public/wz_light.svg";
import user from "@public/user.svg";
import cart from "@public/cart.svg";
import HeaderLink from "./HeaderLink";
import {
  headerLinks,
  HeaderLink as HeaderLinkType,
} from "@data/HeaderLinks.ts";

const Menu: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="menu-header">
      <div className="menu-container">
        <div className="menu-logo">
          <img src={logo} alt="Logo de MW" />
        </div>
        <div className="header-divider"></div>
        <nav className={`menu-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <ul>
            {headerLinks.map((link: HeaderLinkType, index: number) => (
              <HeaderLink key={index} text={link.text} href={link.href} />
            ))}
          </ul>
        </nav>
        <div className={`menu-actions ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="currency-selector">
            <HeaderLink text="USD" href="#" />
          </div>
          <div className="cart">
            <img src={cart} alt="cart" className="cart-icon" />
            <span>Cart (5)</span>
          </div>
          <button className="sign-in">
            Sign In <img src={user} alt="User" className="user-icon" />
          </button>
        </div>
      </div>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? "rotate-bar1" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "fade-bar" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "rotate-bar2" : ""}`}></div>
      </button>
    </header>
  );
};

export default Menu;
