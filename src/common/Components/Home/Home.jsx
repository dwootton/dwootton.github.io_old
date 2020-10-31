import React from "react";
import Background from "../Background/Background";
import Fade from "react-reveal/Fade";

import styles from "./Home.module.scss";
import Projects from "../Projects/FeaturedProjects";
const Home = (props) => {
  return (
    <div>
      <Background></Background>
      <div className={styles.titleGroup}>
        <Fade bottom delay={500}>
          <h4 className={styles.titleName}> Dylan Wootton </h4>
          <h1 className={styles.title}> Data Visualization Engineer </h1>
          <p className={styles.titleContent}>
            I develop interactive visualization tools that make the data science process easier. 
            <br></br>
            <br></br>
            Currently, I am visualizing product telemetry data at Microsoft.
        
          </p>{" "}
          <p className={styles.callToAction}><span></span></p>
        </Fade>
      </div>
    <Fade bottom delay={500}>
    <Projects></Projects>

    </Fade>

    </div>
  );
};
export default Home;
