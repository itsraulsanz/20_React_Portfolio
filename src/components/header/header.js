import React from "react";
import './header.scss'
var Logo = "../../images/logo.svg";

export default function Header() {
  return (
    <div>
      <a className="logo" href="#about-me">
        <img alt="logo" width="200px" height="61px" className="logo" src={Logo} />
      </a>
    </div>
  );
}
