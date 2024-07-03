import "@styles/Header/Header.css";
import logo from "@public/wz_light.svg";
import user from "@public/user.svg";
import cart from "@public/cart.svg";
import HeaderLink from "./HeaderLink";
import { headerLinks } from "@data/HeaderLinks.ts";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <img src={logo} alt="Logo de MW" />
        </div>
        <div className="header-divider"></div>
        <div className="header-links">
          {headerLinks.map((link: string, index: number) => (
            <HeaderLink key={index} text={link.text} href={link.href} />
          ))}
        </div>
      </div>
      <div className="header-right">
        <HeaderLink text="USD" href="#" />
        <span>Cart (5)</span>
        <img src={cart} alt="cart" className="cart" />
        <button className="sign-in-button">
          Sign In <img src={user} alt="User" className="user-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
