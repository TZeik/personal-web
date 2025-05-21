import React from "react";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Styles from "../styles/global.module.css";
import Skills from "../components/Skills";

const Home: React.FC = () => {
  return (
    <div className={Styles.container}>
      <Header />
      <div className={Styles.main}>
        <WorkExperience />
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
