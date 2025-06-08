import React, { useState, useEffect, useRef } from "react";
import Styles from "../styles/portfolio.module.css";
import { Project } from "../types/types";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n/translations";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import ProjectCard from "./common/ProjectCard";

const Portfolio: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].portfolio;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<number>(1); // 1 for right, -1 for left
  const constraintsRef = useRef(null);

  // Sample projects data (same as before)
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
      technologies: ["React", "MongoDB", "Material UI", "Expo", "Next.js"],
      imageUrl: "/portfolio002.png",
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
          ? "RD-PTMS | Transport System Prototype"
          : "RD-PTMS | Prototipo de Sistema de Transporte",
      description:
        language === "en"
          ? "I worked on a prototype of a public transportation system that is capable of calculating the shortest routes, and placing markers."
          : "Trabajé en un prototipo de sistema de transporte público que es capaz de calcular las rutas más cortas y colocar marcadores.",
      technologies: ["Java", "JavaFX", "CSS"],
      imageUrl: "/portfolio003.png",
      codeUrl: "https://github.com/TZeik/rd-ptms",
      features:
        language === "en"
          ? [
              "Create map templates",
              "Generate the shortest route between two markers",
              "Customize the template, and save it locally.",
            ]
          : [
              "Crea plantillas de mapas",
              "Genera la ruta más corta entre dos marcadores",
              "Personaliza la platilla, y guardarla localmente",
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
      technologies: ["Java", "WindowBuilder", "Swing"],
      imageUrl: "/portfolio004.png",
      codeUrl: "https://github.com/TZeik/speciality-center",
      features:
        language === "en"
          ? [
              "Session and role management",
              "Client and server using web sockets",
              "Disease management and patient local database",
            ]
          : [
              "Manejo de sesiones y roles",
              "Cliente y servidor usando web sockets",
              "Gestión de enfermedades y pacientes en base de datos local",
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

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 600);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 50) {
      goToPrev();
    } else if (info.offset.x < -50) {
      goToNext();
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.85,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 2,
      filter: "brightness(1)",
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.85,
      zIndex: 1,
    }),
    left: {
      x: "-70%",
      opacity: 0.7,
      scale: 0.85,
      zIndex: 1,
      filter: "brightness(0.5)",
    },
    right: {
      x: "70%",
      opacity: 0.7,
      scale: 0.85,
      zIndex: 1,
      filter: "brightness(0.5)",
    },
  };

  const transition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    duration: 0.5,
  };

  return (
    <section className={Styles.portfolioSection} id="portfolio">
      <h2 className={Styles.sectionTitle}>{t.title}</h2>
      <div className={Styles.cardContainer} ref={constraintsRef}>
        <div className={Styles.cardsWrapper}>
          <AnimatePresence custom={direction} initial={false}>
            {[-1, 0, 1].map((offset) => {
              const index =
                (currentIndex + offset + projects.length) % projects.length;
              const position =
                offset === 0 ? "center" : offset === -1 ? "left" : "right";

              return (
                <motion.div
                  key={projects[index].id}
                  custom={direction * (offset === 0 ? 0 : offset)}
                  variants={variants}
                  initial="enter"
                  animate={position}
                  exit="exit"
                  transition={transition}
                  drag="x"
                  dragConstraints={constraintsRef}
                  onDragEnd={handleDragEnd}
                  className={Styles.projectCardContainer}
                  style={{
                    position: "absolute",
                    left: "40%",
                    top: 0,
                    width: "85%",
                    height: "100%",
                    originX: 0.5,
                    originY: 0.5,
                  }}
                  onClick={() => position !== "center" && goToSlide(index)}
                >
                  <ProjectCard
                    project={projects[index]}
                    position={position}
                    direction={direction > 0 ? "right" : "left"}
                    onClick={() => {}}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

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
    </section>
  );
};

export default Portfolio;
