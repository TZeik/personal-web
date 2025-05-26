import React from "react";
import { Project } from "../../types/types";
import Styles from "../../styles/portfolio.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../i18n/translations";

interface ProjectCardProps {
  project: Project;
  position: string;
  direction: "left" | "right";
  onClick: () => void;
  children?: React.ReactNode;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, position, direction, onClick, children }, ref) => {
    const { language } = useLanguage();
    const t = translations[language].portfolio;

    return (
      <div
        ref={ref}
        className={`${Styles.projectCard} ${
          Styles[`card${position.charAt(0).toUpperCase() + position.slice(1)}`]
        }`}
        onClick={onClick}
      >
        <div className={Styles.ProjectContentContainer}>
          <div
            className={Styles.projectBackgroundImage}
            style={{
              backgroundImage: `url(${project.imageUrl})`,
            }}
          />
          <div className={Styles.projectContent}>
            <div className={Styles.projectHeader}>
              <h3 className={Styles.projectTitle}>{project.title}</h3>
              <p className={Styles.projectDescription}>{project.description}</p>
            </div>

            {position === "center" && (
              <>
                <div className={Styles.projectDetails}>
                  <div className={Styles.projectFeatures}>
                    <h4 className={Styles.detailTitle}>{t.features}</h4>
                    <ul>
                      {project.features.map((feature, i) => (
                        <li key={i}>
                          <span className={Styles.featureIcon}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={Styles.projectTechnologies}>
                    <h4 className={Styles.detailTitle}>{t.technologies}</h4>
                    <div className={Styles.techBadges}>
                      {project.technologies.map((tech, i) => (
                        <span key={i} className={Styles.techBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={Styles.projectButtons}>
                  <a
                    href={project.codeUrl}
                    className={Styles.codeButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="github icon"
                      className={Styles.codeIcon}
                    />
                    {t.viewCode}
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
