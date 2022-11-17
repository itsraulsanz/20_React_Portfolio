import React from "react";
import WorkData from "../../workData.json";
import './about-me.scss'

export default function AboutMe() {
  var profileImage = "../images/profile_img.jpg";

  var bioText = WorkData.main.bio.map(function (bio, index) {
    return <p key={index}>{bio.text}</p>;
  });

  return (
    <section className="about-me">
      <div className="about-me_container">
        <h2 id="about-me">About me</h2>
        <div className="about_info_container">
          <img rel="preload" alt="Raul_picture" width="750px" height="1000px" className="profile_img" src={profileImage} />
          {bioText}
        </div>
      </div>
    </section>
  );
}
