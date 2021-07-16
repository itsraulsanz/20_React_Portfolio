import React from "react";
import WorkData from "../../workData.json";
import ResumeDetails from "./ResumeDetails";

// export default function Resume() {
//   return (
//     <div>
//       {WorkData.resume.skills.map((resume) => (
//         <ResumeDetails
//           // // Education
//           // school={resume.education.school}
//           // grade={resume.education.grade}
//           // degree={resume.education.degree}
//           // graduated={resume.education.graduated}
//           // description={resume.education.description}

//           // // Work
//           // company={resume.work.company}
//           // location={resume.work.location}
//           // title={resume.work.title}
//           // years={resume.work.years}
//           // job-description={resume.work.description}

//           // Skills
//           skill={resume.skills.name}
//           level={resume.skills.level}

//           // // Personal Skills
//           // personal_skills={resume.personal_skills}
//         />
//       ))}
//     </div>
//   );
// }

export default function Resume() {
  return (
    <div>
      {WorkData.resume.skills.map((skills) => (
        <ResumeDetails skill={skills.name} level={skills.level} />
      ))}
      {WorkData.resume.personal_skills.map((personal_skills) => (
        <ResumeDetails personal_skills={personal_skills} />
      ))}
    </div>
  );
}
