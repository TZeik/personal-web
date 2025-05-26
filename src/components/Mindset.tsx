import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Styles from "../styles/mindset.module.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n/translations";

const Mindset: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].mindset;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className={Styles.mindsetContainer}
      initial="hidden"
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      variants={container}
    >
      <motion.div className={Styles.contentWrapper} variants={container}>
        <motion.div className={Styles.profileSection} variants={item}>
          <motion.img
            src="/profile.png"
            alt="Profile"
            className={Styles.profileImage}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </motion.div>
        <motion.div className={Styles.textSection} variants={item}>
          <motion.h2 className={Styles.sectionTitle} variants={item}>
            {t.title}
          </motion.h2>
          <motion.div className={Styles.description} variants={container}>
            {t.paragraphs.map((paragraph, index) => (
              <motion.p key={index} variants={item}>
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Mindset;
