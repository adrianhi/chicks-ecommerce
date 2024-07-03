import React from "react";
import "@styles/Header/HeaderLink.css";
import downArrowSvg from "@public/down-arrow.svg";

interface HeaderLinkProps {
  text: string;
  href: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ text, href }) => {
  return (
    <div className="header-link">
      <a href={href} className="header-link-text">
        {text}
      </a>
      <img src={downArrowSvg} alt="Down Arrow" className="down-arrow-icon" />
    </div>
  );
};

export default HeaderLink;
