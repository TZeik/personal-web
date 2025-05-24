import React from "react";
import Styles from "../styles/header.module.css";

const Header: React.FC = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.headerContent}>
        <h1 className={Styles.name}>Hi! I&apos;m Randy Germosén</h1>
        <h2 className={Styles.title}>Full Stack and Software Engineer</h2>
      </div>
      <div className={Styles.headerDescription}>
        <h2 className={Styles.descriptionTitle}>
          Business-Driven Web, Mobile & Software Developer
        </h2>
        <div className={Styles.descriptionContainer}>
          <p className={Styles.description}>
            Skilled in designing and implementing robust applications across
            multiple platforms. Combines problem-solving expertise with a deep
            understanding of both frontend and backend systems.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
