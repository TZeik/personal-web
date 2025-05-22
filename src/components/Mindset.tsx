import React from 'react';
import Styles from "../styles/mindset.module.css";

const Mindset: React.FC = () => {
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
                    <h2 className={Styles.sectionTitle}>Mindset</h2>
                    <div className={Styles.description}>
                        <p>
                            As a full-stack developer, I approach problems with a systematic 
                            and analytical mindset. I break down complex challenges into 
                            manageable components, applying both technical expertise and 
                            creative thinking to develop efficient solutions.
                        </p>
                        <p>
                            When leadership is required, I naturally step up to coordinate 
                            efforts, facilitate communication between teams, and ensure 
                            project alignment with business goals. I believe in leading 
                            by example through clean code, thorough documentation, and 
                            mentoring junior developers.
                        </p>
                        <p>
                            My adaptability allows me to switch contexts between frontend 
                            and backend seamlessly, while maintaining a user-centric focus 
                            throughout the development process.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mindset;