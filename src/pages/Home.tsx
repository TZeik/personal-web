import React from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Styles from "../styles/global.module.css";
import Skills from "../components/Skills";
import Mindset from "../components/Mindset";
import Portfolio from "../components/Portfolio";
import Language from "../components/Language";

const Home: React.FC = () => {
  return (
    <LanguageProvider>
      <div className={Styles.container}>
        <Header />
        <Language />
        <div className={Styles.main}>
          <WorkExperience />
          <Mindset />
          <Portfolio />
          <Skills />
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Home;
