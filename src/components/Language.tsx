import React, { useState } from 'react';
import Styles from '../styles/language.module.css';
const Language: React.FC = () => {
    const [currentLanguage, setCurrentLanguage] = useState<'en' | 'es'>('en');

    const toggleLanguage = () => {
        setCurrentLanguage(prev => prev === 'es' ? 'en' : 'es');
        // Language change logic
    };

    return (
        <button 
            className={Styles.language}
            onClick={toggleLanguage}
        >
            {currentLanguage === 'en' ? 'EN' : 'ES'}
        </button>
    );
};

export default Language;