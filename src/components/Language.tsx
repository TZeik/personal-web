import React, { useState } from 'react';
import Styles from '../styles/language.module.css';
import { useLanguage } from '../contexts/LanguageContext';

const Language: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button 
            className={Styles.language}
            onClick={toggleLanguage}
        >
            {language === 'es' ? 'EN' : 'ES'}
        </button>
    );
};

export default Language;