import React, { useRef } from "react";
import Styles from "../styles/skills.module.css";
import { SkillCategory } from "../types/types";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n/translations";
import { motion, useInView } from "framer-motion";

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        {
          name: "HTML5",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "JavaScript",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "React",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Bootstrap",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      ],
    },
    {
      name: "Backend",
      skills: [
        {
          name: "Node.js",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Python",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Java",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "C",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        },
        {
          name: "C++",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "Firebase",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      ],
    },
    {
      name: "Mobile",
      skills: [
        {
          name: "React Native",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Expo",
          imageUrl: "/expo.svg",
        },
      ],
    },
    {
      name: "Databases",
      skills: [
        {
          name: "SQL Server",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        },
        {
          name: "MySQL",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "MongoDB",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Firebase",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      ],
    },
    {
      name: "DevOps & Tools",
      skills: [
        {
          name: "Git",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Docker",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Azure",
          imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        },
        {
          name: "Postman",
          imageUrl:
            "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
        {
          name: "Cloudinary",
          imageUrl:
            "https://res.cloudinary.com/cloudinary/image/upload/v1588801379/cloudinary_logo_for_white_bg.svg",
        },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.0 },
    },
  };

  return (
    <motion.section
      className={Styles.skills}
      id="skills"
      initial="hidden"
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      variants={container}
    >
      <motion.h2 className={Styles.sectionTitle} variants={item}>
        {t.title}
      </motion.h2>
      <div className={Styles.skillsContainer}>
        {skillCategories.map((category) => (
          <motion.div
            key={category.name}
            className={Styles.skillCategory}
            variants={item}
          >
            <h3 className={Styles.categoryTitle}>{category.name}</h3>
            <motion.div className={Styles.skillsGrid}>
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className={Styles.skillItem}
                  whileHover={{ scale: 1.05 }}
                  variants={item}
                >
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className={Styles.skillIcon}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/50";
                    }}
                  />
                  <span className={Styles.skillName}>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
