import React, { useState, useEffect, useRef } from "react";
import Styles from "../styles/portfolio.module.css";
import { Project } from "../types/types";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n/translations";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProjectCard from "./common/ProjectCard";

const Portfolio: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].portfolio;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Sample projects data
  const projects: Project[] = [
    {
      id: "1",
      title:
        language === "en"
          ? "SecurePass | Access Control Application"
          : "SecurePass | Aplicación de Control de Acceso",
      description:
        language === "en"
          ? "A full-featured system to manage visits in residences: connecting residents, guards, and administrators."
          : "Un sistema completo para gestionar visitas en residencias: conectando a residentes, guardias y administradores.",
      technologies: [
        "React",
        "Expo",
        "MongoDB",
        "Node.js",
        "Express",
        "Typescript",
        "Cloudinary",
      ],
      imageUrl: "/portfolio001.png",
      codeUrl: "https://github.com/TZeik/secure-pass",
      features:
        language === "en"
          ? [
              "Full visit management",
              "Roles & authentication",
              "Report generation, easy to use, and more...",
            ]
          : [
              "Gestión completa de visitas",
              "Roles y autenticación",
              "Generación de informes, fácil de usar, y más...",
            ],
    },
    {
      id: "2",
      title:
        language === "en"
          ? "Dafu | Clinic Management System"
          : "Dafu | Sistema de Administración de Consultorio",
      description:
        language === "en"
          ? "A streamlined app to manage appointments, patient records, billing, and staff schedules—perfect for modern clinics."
          : "Una aplicación simplificada para gestionar citas, registros de pacientes, facturación y horarios del personal, perfecta para clínicas modernas.",
      technologies: ["React", "MongoDB", "Material UI", "Expo"],
      imageUrl: "/sample02.jpg",
      codeUrl: "https://github.com/TZeik/dfu-clinic",
      features:
        language === "en"
          ? [
              "Easy appointment management",
              "Reports & statistics",
              "Billing system and automatic notifications",
            ]
          : [
              "Gestión de citas fácil",
              "Informes y estadísticas",
              "Sistema de facturación y notificaciones automáticas",
            ],
    },
    {
      id: "3",
      title:
        language === "en"
          ? "SecurePass | Access Control Application"
          : "SecurePass | Aplicación de Control de Acceso",
      description:
        language === "en"
          ? "A full-featured system to manage visits in residences: connecting residents, guards, and administrators."
          : "Un sistema completo para gestionar visitas en residencias: conectando a residentes, guardias y administradores.",
      technologies: [
        "React",
        "Expo",
        "MongoDB",
        "Node.js",
        "Express",
        "Typescript",
        "Cloudinary",
      ],
      imageUrl: "/sample01.jpg",
      codeUrl: "https://github.com/TZeik/secure-pass",
      features:
        language === "en"
          ? [
              "Full visit management",
              "Roles & Authentication",
              "Report generation, easy to use, and more...",
            ]
          : [
              "Gestión completa de visitas",
              "Roles y autenticación",
              "Generación de informes, fácil de usar, y más...",
            ],
    },
    {
      id: "4",
      title:
        language === "en"
          ? "SpecialityCenter | Speciality Center Manager"
          : "SpecialityCenter | Administrador de Centro de Especialidades",
      description:
        language === "en"
          ? "I worked on a desktop application that is used to manage a specialty center."
          : "Trabajé en una aplicación de escritorio que sirve para administrar un centro de especialidades.",
      technologies: [
        "Java",
        "WindowBuilder",
      ],
      imageUrl: "/sample02.jpg",
      codeUrl: "https://github.com/TZeik/secure-pass",
      features:
        language === "en"
          ? [
              "Full visit management",
              "Roles & Authentication",
              "Report generation, easy to use, and more...",
            ]
          : [
              "Gestión completa de visitas",
              "Roles y autenticación",
              "Generación de informes, fácil de usar, y más...",
            ],
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(goToNext, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const difference = touchStartX.current - touchEndX.current;
    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const navigate = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? "right" : "left");
    navigate(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 600);
  };

  const goToNext = () => {
    setDirection("right");
    navigate((currentIndex + 1) % projects.length);
  };

  const goToPrev = () => {
    setDirection("left");
    navigate((currentIndex - 1 + projects.length) % projects.length);
  };

  const getCardPosition = (index: number) => {
    const total = projects.length;
    const relativeIndex = (index - currentIndex + total) % total;

    if (relativeIndex === 0) return "center";
    if (relativeIndex === 1) return "right";
    if (relativeIndex === total - 1) return "left";
    return "hidden";
  };

  return (
    <section className={Styles.portfolioSection} id="portfolio">
      <h2 className={Styles.sectionTitle}>{t.title}</h2>
      <div className={Styles.cardContainer}>
        <div
          className={Styles.cardsWrapper}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <TransitionGroup component={null}>
            {projects.map((project, index) => {
              const position = getCardPosition(index);
              if (position === "hidden") return null;

              const nodeRef = useRef<HTMLDivElement>(null);

              return (
                <CSSTransition
                  key={project.id}
                  nodeRef={nodeRef}
                  timeout={500}
                  classNames={{
                    enter:
                      direction === "right"
                        ? Styles["slide-right-enter"]
                        : Styles["slide-left-enter"],
                    enterActive:
                      direction === "right"
                        ? Styles["slide-right-enter-active"]
                        : Styles["slide-left-enter-active"],
                    exit:
                      direction === "right"
                        ? Styles["slide-left-exit"]
                        : Styles["slide-right-exit"],
                    exitActive:
                      direction === "right"
                        ? Styles["slide-left-exit-active"]
                        : Styles["slide-right-exit-active"],
                  }}
                >
                  <ProjectCard
                    ref={nodeRef}
                    project={project}
                    position={position}
                    direction={direction}
                    onClick={() => position !== "center" && goToSlide(index)}
                  />
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </div>
        <button
          className={`${Styles.sliderButton} ${Styles.prevButton}`}
          onClick={goToPrev}
          aria-label="Previous project"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className={`${Styles.sliderButton} ${Styles.nextButton}`}
          onClick={goToNext}
          aria-label="Next project"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={Styles.sliderDots}>
          {projects.map((_, index) => (
            <button
              key={index}
              className={`${Styles.dot} ${
                index === currentIndex ? Styles.activeDot : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
