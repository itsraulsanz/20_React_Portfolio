import React from "react";
var logo = "../images/logo.svg";

export default function Header() {
  return (
    <div>
      <a className="logo" href="#about-me">
        <img alt="logo" className="logo" src={logo} />
      </a>
    </div>
  );
}
