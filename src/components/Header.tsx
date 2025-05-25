import React from "react";
import Styles from "../styles/header.module.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n/translations";

const Header: React.FC = () => {

    const { language } = useLanguage();
  const t = translations[language].header;

  return (
    <header className={Styles.header}>
      <div className={Styles.headerContent}>
        <h1 className={Styles.name}>{t.name}</h1>
        <h2 className={Styles.title}>{t.title}</h2>
      </div>
      <div className={Styles.headerDescription}>
        <h2 className={Styles.descriptionTitle}>{t.descriptionTitle}</h2>
        <div className={Styles.descriptionContainer}>
          <p className={Styles.description}>{t.description}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;