import React from "react";
import WorkData from "../../workData.json";

export default function Home() {
  var profileImage = "../images/profile_img.jpg";

  return (
    <section>
      <h2>About me</h2>
      <div className="about_info_container">
        <img alt="Raul_picture" className="profile_img" src={profileImage} />
          {WorkData.main.bio.map((bio) => (
            <p>{bio.text}</p>
          ))}
      </div>
    </section>
  );
}
