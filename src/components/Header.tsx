import React from "react";
import Styles from "../styles/global.module.css";

const Header: React.FC = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.headerContent}>
        <h1 className={Styles.name}>Hi! I&apos;m Randy Germosén</h1>
        <h2 className={Styles.title}>Senior Full Stack Web Developer</h2>
      </div>
      <div className={Styles.headerDescription}>
        <h2 className={Styles.descriptionTitle}>
          Business-Driven Web & Software Developer
        </h2>
        <div className={Styles.descriptionContainer}>
          <p className={Styles.description}>
            Specialized in modern web and mobile development technologies such
            as React, React-Native, and Node.js. Passionate developer seeking
            roles that involve leadership and creativity.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
