import React from "react";
import Styles from "../styles/footer.module.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n/translations";

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerContent}>
        <div className={Styles.contactInfo}>
          <h3>{t.contactInfo}</h3>
          <p>{t.location}</p>
          <p>alexgermosen@gmail.com</p>
          <p>+1809 742 0101</p>
        </div>
        <div className={Styles.copyright}>
          <p>© {new Date().getFullYear()} {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;