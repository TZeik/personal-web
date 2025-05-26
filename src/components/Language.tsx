import React from "react";
import Styles from "../styles/language.module.css";
import { useLanguage } from "../contexts/LanguageContext";

const Language: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button className={Styles.language} onClick={toggleLanguage}>
      <div className={Styles.languageText}>
        {language === "es" ? "EN" : "ES"}
      </div>
    </button>
  );
};

export default Language;
