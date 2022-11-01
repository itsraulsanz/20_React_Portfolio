import React from "react";
var logo = "../images/logo.svg";

export default function Header() {
  
  return (
    <div>
      <div>
        <img alt="logo" className="logo" src={logo} />
      </div>
    </div>
  );
}
