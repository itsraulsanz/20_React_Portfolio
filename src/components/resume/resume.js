import React from "react";
import WorkData from "../../workData.json";
import './resume.scss'

export default function Resume() {

  if (WorkData.resume) {
    var work = WorkData.resume.work.map(function (work) {
      return (
        <div className="timeline" key={work.company}>
          <div className="date_container">
            <div className="date">
              <h3 className="title">{work.title}</h3>
              <h3 className="date-text">{work.years}</h3>
              <p className="location">{work.company}</p>
            </div>
            <div className="date_line">
              <span className="bullet"></span>
            </div>
          </div>
          <div className="details">
            <div dangerouslySetInnerHTML={{ __html: work.description }}></div>
          </div>
        </div>
      );
    });

    var education = WorkData.resume.education.map(function (education) {
      return (
        <div className="timeline" key={education.school}>
          <div className="date_container">
            <div className="date">
              <h3 className="title">{education.degree}</h3>
              <h3 className="date-text">{education.graduated}</h3>
              <p className="location">{education.school}</p>
            </div>
            <div className="date_line">
              <span className="bullet"></span>
            </div>
          </div>
          <div className="details">
            <p>{education.description}</p>
          </div>
        </div>
      );
    });

    var skills = WorkData.resume.skills.map(function (skills, index) {

      return (
        <li key={index}>
          <div className="skill_title">{skills.name}</div>
        </li>
      );
    });

    var personalSkills = WorkData.resume.personalSkills.map(function (
      personalSkills, index
    ) {
      return (
        <li key={index}>
          <div className="skill_title">{personalSkills}</div>
        </li>
      );
    });

    var languages = WorkData.resume.languages.map(function (languages, index) {
      return (
        <li key={index}>
          <div className="skill_title">{languages}</div>
        </li>
      );
    });

    // var hobbies = WorkData.resume.hobbies.map(function (hobbies, index) {
    //   return (
    //     <li key={index}>
    //       <div className="skill_title">{hobbies}</div>
    //     </li>
    //   );
    // });
  }

  return (
    <section className="resume">
      {/* <div className="cv">
        <a
            href={cvFile}
            rel="noopener noreferrer"
            target="_blank"
          >
        Download the resume{" "} here
        </a>
      </div> */}
      <div className="resume_container">

        <div className="row work">
          <div className="title">
            <h2 id="resume">Work Experience</h2>
          </div>
          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row education">
            <div className="title">
              <h2>Education</h2>
            </div>
            <div>{education}</div>
        </div>

        <div className="skills_container">
        <div className="skills_left">
          <div className="row skill">
            <div className="title">
              <h2>Tech Skills</h2>
            </div>
            <div className="skills_list">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
        
        <div className="skills_right">
          <div className="row personal_Skill">
            <div className="title">
              <h2>Other Skills</h2>
            </div>
            <div className="skills_list">
              <div className="bars">
                <ul className="skills">{personalSkills}</ul>
              </div>
            </div>
          </div>

          <div className="row languages">
            <div className="title">
              <h2>Languages</h2>
            </div>
            <div className="skills_list">
              <div className="bars">
                <ul className="skills">{languages}</ul>
              </div>
            </div>
          </div>

          {/* <div className="row hobbies">
            <div className="title">
              <h2>Hobbies</h2>
            </div>
            <div className="skills_list">
              <div className="bars">
                <ul className="skills">{hobbies}</ul>
              </div>
            </div>
          </div> */}
        </div>
        </div>
      </div>

      <div className="resume_container">
      </div>
    </section>
  );
}
