import React from "react";

export default function Home() {
  var profileImage = "../images/profile_img.jpg";

  return (
    <section>
      <h2>About me</h2>
      <div className="about_info_container">
        <img alt="Raul_picture" className="profile_img" src={profileImage} />
        <p>
          Front end web developer with a background in digital design ready to
          provide my experience in UX, marketing and advertising. After
          completing the accredited University of Manchester Coding Boot Camp, I
          am looking for a challenging position where I can focus and improve
          upon my passion for coding.
        </p>
        <p>
          My strengths are creativity, teamwork, and building projects from
          ideation to execution.
        </p>
      </div>
    </section>
  );
}
