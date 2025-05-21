import React from "react";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Styles from "../styles/global.module.css";

const Home: React.FC = () => {
  return (
    <div className={Styles.main}>
      <Header />
      <WorkExperience />
      <Footer />
    </div>
  );
};

export default Home;
