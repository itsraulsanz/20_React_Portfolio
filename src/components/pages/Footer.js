import React from "react";
import WorkData from "../../workData.json";

export default function Footer() {
  if (WorkData.resume) {
    var email = "mailto:" + WorkData.main.email;
    var github = WorkData.main.github;
    var linkedin = WorkData.main.linkedin;
  }

  return (
    <div>
      <address>
        <ul>
          <li>
            <a href={email} rel="noopener noreferrer" target="_blank">
              contact@designraul.com
            </a>
          </li>
          <li>
            <a href={github} rel="noopener noreferrer" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href={linkedin} rel="noopener noreferrer" target="_blank">
              Linkedin
            </a>
          </li>
        </ul>
      </address>
    </div>
  );
}
