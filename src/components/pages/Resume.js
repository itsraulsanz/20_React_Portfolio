import React from "react";
import WorkData from "../../workData.json";

export default function Resume() {
  var cvFile = '../pdf/raulSanz_cv.pdf';

  if (WorkData.resume) {
    var education = WorkData.resume.education.map(function (education) {
      return (
        <div className="timeline" key={education.school}>
          <div className="date_line">
            <em className="date">{education.graduated}</em>
          </div>
          <div className="details">
            <h3>{education.degree}</h3>
            {education.school}
            <p>{education.description}</p>
          </div>
        </div>
      );
    });

    var work = WorkData.resume.work.map(function (work) {
      return (
        <div className="timeline" key={work.company}>
          <div className="date_line">
            <em className="date">{work.years}</em>
            <br />
            {work.company}
          </div>
          <div className="details">
            <h3>{work.title}</h3>
            <p>{work.description}</p>
          </div>
        </div>
      );
    });

    var skills = WorkData.resume.skills.map(function (skills, index) {
      // var level = skills.level;
      // const styles = {
      //   width: level,
      // };

      return (
        <li key={index}>
          <div className="skill_title">{skills.name}</div>
          {/* <div style={{ background: "white", width: "100%" }}>
            <div className="level" style={styles}>
              {level}
            </div>
          </div> */}
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

    var hobbies = WorkData.resume.hobbies.map(function (hobbies, index) {
      return (
        <li key={index}>
          <div className="skill_title">{hobbies}</div>
        </li>
      );
    });
  }

  return (
    <section className="container">
      <div className="cv">
        <a
            href={cvFile}
            rel="noopener noreferrer"
            target="_blank"
          >
        Download the resume{" "} here
        </a>
      </div>
      <div className="resume">
        <div className="row education">
          <div className="title">
            <h2>Education</h2>
          </div>
          <div>{education}</div>
        </div>

        <div className="row skill">
          <div className="title">
            <h2>Skills</h2>
          </div>
          <div className="skills_list">
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>

        <div className="row personal_Skill">
          <div className="title">
            <h2>Personal Skills</h2>
          </div>
          <div className="skills_list">
            <div className="bars">
              <ul className="skills">{personalSkills}</ul>
            </div>
          </div>
        </div>
      </div>

      <div className="resume">
        <div className="row work">
          <div className="title">
            <h2>Work Experience</h2>
          </div>
          <div className="nine columns main-col">{work}</div>
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

        <div className="row hobbies">
          <div className="title">
            <h2>Hobbies</h2>
          </div>
          <div className="skills_list">
            <div className="bars">
              <ul className="skills">{hobbies}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
