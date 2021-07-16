import React from "react";
import WorkData from '../../workData.json';

export default function Resume() {
    if (WorkData.resume) {
      var education = WorkData.resume.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <br />{" "}
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });

      var work = WorkData.resume.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <br /> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });

      var skills = WorkData.resume.skills.map(function (skills) {
        var level = skills.level;
        const styles = {
            width: level,
            };

        return (
          <li key={skills.name}>
            <em>{skills.name}</em> <div style={{background: "white", width: "100%"}}><div className="level" style={styles}>{level}</div></div>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education resume">
            <div className="title">
                <h2>Education</h2>
                </div>

          <div>
            {education}
          </div>
        </div>

        <div className="row work resume">
        <div className="title">
            <h2>Work</h2>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill resume">
        <div className="title">
            <h2>Skills</h2>
          </div>

          <div className="nine columns main-col">

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
}
