import React from "react";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Styles from "../styles/global.module.css";
import Skills from "../components/Skills";
import Mindset from "../components/Mindset";
import Portfolio from "../components/Portfolio";

const Home: React.FC = () => {
  return (
    <div className={Styles.container}>
      <Header />
      <div className={Styles.main}>
        <WorkExperience />
        <Mindset />
        <Portfolio />
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
