import React from 'react';
import Styles from "../styles/mindset.module.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n/translations";

const Mindset: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language].mindset;

    return (
        <div className={Styles.mindsetContainer}>
            <div className={Styles.contentWrapper}>
                <div className={Styles.profileSection}>
                    <img 
                        src="/profile.png" 
                        alt="Profile" 
                        className={Styles.profileImage}
                    />
                </div>
                <div className={Styles.textSection}>
                    <h2 className={Styles.sectionTitle}>{t.title}</h2>
                    <div className={Styles.description}>
                        {t.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mindset;