import React from "react";
import Styles from "../styles/work-experience.module.css";
import { Experience } from "../types/types";



const WorkExperience: React.FC = () => {
  const experiences: Experience[] = [
    {
      workplace: "Example Workplace #1",
      position: "Example Position",
      startDate: "Enero",
      endDate: "Present",
      information: [
        "Example Info 1",
        "Example Info 2",
        "Example Info 3"
      ]
    },
    {
      workplace: "Example Workplace #2",
      position: "Example Position",
      startDate: "Enero",
      endDate: "Present",
      information: [
        "Example Info 1",
        "Example Info 2",
        "Example Info 3"
      ]
    },

  ];

  return (
    <section className={Styles.workExperience}>
      <h2 className={Styles.sectionTitle}>Work Experience</h2>
      <div className={Styles.experienceList}>
        {experiences.map((exp, index) => (
          <div key={index} className={Styles.experienceItem}>
            <div className={Styles.experienceHeader}>
              <h3 className={Styles.workplace}>{exp.workplace}</h3>
              <span className={Styles.position}>{exp.position}</span>
              <span className={Styles.dates}>{exp.startDate} - {exp.endDate}</span>
            </div>
            <ul className={Styles.informationList}>
              {exp.information.map((info, i) => (
                <li key={i} className={Styles.informationItem}>{info}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;