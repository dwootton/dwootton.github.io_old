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
      
        <Fade bottom delay={150}>
          <h4 className={styles.titleName}> Dylan Wootton </h4>
          </Fade>
          <Fade bottom delay={450}>
          <h1 className={styles.title}> Data Visualization Engineer </h1>
          </Fade>
          <Fade bottom delay={950}>
          <h3 className={styles.titleContent}>
            I develop interactive visualization tools that empower organizations to find insight from their data. 
            <br></br>
            <br></br>
            Currently, I am visualizing product telemetry data at Microsoft.
          </h3>{" "}
          </Fade>
          <Fade bottom delay={1450}>
          <h4 className={styles.callToAction}><span>Email me</span> or <span>see past projects</span></h4>
          </Fade>
      </div>
    <Fade bottom delay={1500}>
    <Projects></Projects>

    </Fade>

    </div>
  );
};
export default Home;
