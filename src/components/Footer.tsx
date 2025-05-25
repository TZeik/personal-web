import React from "react";
import Styles from "../styles/footer.module.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n/translations";
import { Social } from "../types/types";

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const socials: Social[] = [
    {
      name: "Email",
      imageUrl: "/mail.svg",
      linkTo: "mailto:business@randygermosen.com"
    },
    {
      name: "Github",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      linkTo: "https://github.com/TZeik"
    },
    {
      name: "Linkedin",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg",
      linkTo: "https://www.linkedin.com/in/randygermosen/"
    }
  ];

  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerContent}>
        <div className={Styles.contactInfo}>
          <p>{t.location}</p>
          <p>business@randygermosen.com</p>
          <p>+1 809 742 0101</p>
        </div>
        <div className={Styles.socialMedia}>
          {socials.map((social, index) => (
            <a 
              key={index}
              href={social.linkTo}
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.socialIcon}
            >
              <img 
                src={social.imageUrl} 
                alt={social.name} 
                className={Styles.iconImage}
              />
            </a>
          ))}
        </div>
        <div className={Styles.copyright}>
          <p>© {new Date().getFullYear()} {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;