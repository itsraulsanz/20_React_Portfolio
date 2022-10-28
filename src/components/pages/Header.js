import React from "react";
import WorkData from "../../workData.json";


export default function Header() {
  
  return (
    <div>
      <h1>{WorkData.main.name}</h1>
    </div>
  );
}
