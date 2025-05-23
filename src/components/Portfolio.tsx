import React from "react";
import Styles from "../styles/portfolio.module.css";
import { Project } from "../types/types";

const Portfolio: React.FC = () => {
  // Sample projects data
  const projects: Project[] = [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "A full-featured online store with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "/sample01.jpg",
      projectUrl: "https://example.com",
      features: [
        "Product catalog with filters",
        "User authentication",
        "Shopping cart",
        "Payment processing"
      ]
    },
    {
      id: "2",
      title: "Task Management App",
      description: "Collaborative tool for team task organization",
      technologies: ["React", "Firebase", "Material UI"],
      imageUrl: "/sample02.jpg",
      projectUrl: "https://example.com",
      features: [
        "Real-time updates",
        "Drag-and-drop interface",
        "Team collaboration",
        "Progress tracking"
      ]
    }
  ];

  return (
    <section className={Styles.portfolioSection}>
      <h2 className={Styles.sectionTitle}>Portfolio</h2>
      <div className={Styles.projectsContainer}>
        {projects.map((project) => (
          <div key={project.id} className={Styles.projectCard}>
            <div 
              className={Styles.projectBackground} 
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            >
              <div className={Styles.projectContent}>
                <div className={Styles.projectInfoTop}>
                  <h3 className={Styles.projectTitle}>{project.title}</h3>
                  <p className={Styles.projectDescription}>{project.description}</p>
                  <ul className={Styles.projectFeatures}>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={project.projectUrl} 
                  className={Styles.projectButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>

                <div className={Styles.projectInfoBottom}>
                  <div className={Styles.technologies}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={Styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;