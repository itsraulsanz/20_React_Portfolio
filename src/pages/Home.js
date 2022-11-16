import React from "react";
import AboutMe from "../components/about-me/about-me";
import Resume from "../components/resume/resume";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";

export default function Home() {
  return (
    <div>
      <AboutMe />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}
