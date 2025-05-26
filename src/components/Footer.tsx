import React, { useRef } from "react";
import Styles from "../styles/footer.module.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n/translations";
import { Social } from "../types/types";
import { motion, useInView } from "framer-motion";

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const socials: Social[] = [
    {
      name: "Email",
      imageUrl: "/mail.svg",
      linkTo: "mailto:business@randygermosen.com",
    },
    {
      name: "Github",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      linkTo: "https://github.com/TZeik",
    },
    {
      name: "Linkedin",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg",
      linkTo: "https://www.linkedin.com/in/randygermosen/",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.0 },
    },
  };

  return (
    <motion.footer
      className={Styles.footer}
      initial="hidden"
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      variants={container}
    >
      <motion.div className={Styles.footerContent} variants={container}>
        <motion.div className={Styles.contactInfo} variants={item}>
          <p>{t.location}</p>
          <p>business@randygermosen.com</p>
        </motion.div>
        <motion.div className={Styles.socialMedia} variants={item}>
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.linkTo}
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.socialIcon}
              whileHover={{ scale: 1.2 }}
              variants={item}
            >
              <img
                src={social.imageUrl}
                alt={social.name}
                className={Styles.iconImage}
              />
            </motion.a>
          ))}
        </motion.div>
        <motion.div className={Styles.copyright} variants={item}>
          <p>
            © {new Date().getFullYear()} {t.copyright}
          </p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
