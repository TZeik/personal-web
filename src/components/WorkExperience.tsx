import React, { useRef } from "react";
import Styles from "../styles/work-experience.module.css";
import { Experience } from "../types/types";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n/translations";
import { motion, useInView } from "framer-motion";

const WorkExperience: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].workExperience;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const experiences: Experience[] = [
    {
      workplace: "Example Workplace #1",
      position: "Example Position",
      startDate: language === "es" ? "Enero" : "January",
      endDate: t.present,
      information: ["Example Info 1", "Example Info 2", "Example Info 3"],
    },
    {
      workplace: "Example Workplace #2",
      position: "Example Position",
      startDate: "Enero",
      endDate: "Present",
      information: ["Example Info 1", "Example Info 2", "Example Info 3"],
    },
  ];

  const handleFullView = () => {
    // Implement your CV viewing logic here
    console.log("View Full CV clicked");
  };
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.section
      className={Styles.workExperience}
      initial="hidden"
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      variants={container}
    >
      <motion.h2 className={Styles.sectionTitle} variants={item}>
        {t.title}
      </motion.h2>
      <div className={Styles.experienceList}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={Styles.experienceItem}
            variants={item}
          >
            <div className={Styles.experienceHeader}>
              <div className={Styles.workplaceContainer}>
                <img
                  src="/suitcase.png"
                  alt="Suitcase"
                  className={Styles.workIcon}
                />
                <h3 className={Styles.workplace}>{exp.workplace}</h3>
              </div>
              <span className={Styles.position}>{exp.position}</span>
              <span className={Styles.dates}>
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <ul className={Styles.informationList}>
              {exp.information.map((info, i) => (
                <motion.li
                  key={i}
                  className={Styles.informationItem}
                  variants={item}
                >
                  {info}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <motion.div
        className={Styles.viewFullCV}
        whileHover={{ scale: 1.05 }}
        variants={item}
      >
        <button onClick={handleFullView} aria-label={t.viewFullCV}>
          {t.viewFullCV}
          <span className={Styles.buttonIcon}>→</span>
        </button>
      </motion.div>
    </motion.section>
  );
};

export default WorkExperience;
