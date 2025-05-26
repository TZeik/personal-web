import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Styles from "../styles/header.module.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n/translations";

const Header: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].header;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <motion.header
      className={Styles.header}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className={Styles.headerContent}>
        <motion.h1 className={Styles.name} variants={itemVariants}>
          {t.name}
        </motion.h1>
        <motion.h2 className={Styles.title} variants={itemVariants}>
          {t.title}
        </motion.h2>
      </div>
      <motion.div className={Styles.headerDescription} variants={itemVariants}>
        <motion.h2 className={Styles.descriptionTitle} variants={itemVariants}>
          {t.descriptionTitle}
        </motion.h2>
        <motion.div
          className={Styles.descriptionContainer}
          variants={itemVariants}
        >
          <p className={Styles.description}>{t.description}</p>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
