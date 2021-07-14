import React from "react";

export default function Home() {
  var profileImage = '../images/profile_img.jpg';

  return (
    <section>
      <h2>About me</h2>
      <div className="about_info_container">
        <img
          alt="Raul_picture"
          className="profile_img"
          src={profileImage}
        />
        <p>
          Creative and passionate designer with an established Digital Design
          experience alongside a vast amount of knowledge within marketing and
          advertising. Including a multiple skill set that compliments the
          disciplines of Design, programming and UX. Currently I am studying Full
          Stack Developer at University of Manchester. 
        </p>  
        <p>
          Moving forward I am looking for a challenging position as a developer, in which my passion for digital industry and experience will be valued.
        </p>      
      </div>
    </section>
  );
}
