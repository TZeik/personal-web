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
      title: "E-commerce Platform",
      description: "A full-featured online store with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "/sample01.jpg",
      codeUrl: "https://github.com/example",
      features: [
        "Product catalog with filters",
        "User authentication",
        "Shopping cart",
        "Payment processing",
      ],
    },
    {
      id: "2",
      title: "Task Management App",
      description: "Collaborative tool for team task organization",
      technologies: ["React", "Firebase", "Material UI"],
      imageUrl: "/sample02.jpg",
      codeUrl: "https://github.com/example",
      features: [
        "Real-time updates",
        "Drag-and-drop interface",
        "Team collaboration",
        "Progress tracking",
      ],
    },
    {
      id: "3",
      title: "Secure Pass App",
      description: "Password manager with end-to-end encryption",
      technologies: ["React", "Node.js", "PostgreSQL", "CryptoJS"],
      imageUrl: "/sample03.jpg",
      codeUrl: "https://github.com/example",
      features: [
        "Secure password generation",
        "Encrypted storage",
        "Cross-device sync",
        "Biometric authentication",
      ],
    },
    {
      id: "4",
      title: "Weather Dashboard",
      description: "Real-time weather information with forecasts",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      imageUrl: "/sample04.jpg",
      codeUrl: "https://github.com/example",
      features: [
        "Location-based weather",
        "5-day forecast",
        "Weather charts",
        "Favorite locations",
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
