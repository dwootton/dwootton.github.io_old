import React from "react";
import Background from "../Background/Background";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import styles from "./Home.module.scss";
import Projects from "../Projects/FeaturedProjects";
import { EmailCopyButton } from "../Header/HeaderLinks";
import Button from "@material-ui/core/Button";
const Home = (props) => {
  return (
    <div>
      <Background></Background>
      <div className={styles.content}>
      <div className={styles.titleGroup}>
        
        <Fade bottom delay={950}>
          <h1 className={styles.title}> Data Visualization Engineer <span role="img" aria-label="bar chart emoji">📊</span></h1>
        </Fade>
        <Fade bottom delay={1450}>
          <h3 className={styles.titleContent}>
            I develop interactive visualization tools that empower organizations to find insight
            from their data.
            <br></br>
            <br></br>
            Currently, I am visualizing product telemetry data at Microsoft. Previously a researcher
            at the Visualization Design Lab.
          </h3>{" "}
        </Fade>
        <Fade bottom delay={2150}>
          <span className={styles.callToAction}>
            <EmailCopyButton /> or{" "}
            <Button>
              <Link smooth to={"selectedProjects"}>
                see past projects.
              </Link>
            </Button>
          </span>
        </Fade>
      </div>
      <Fade bottom>
        <Projects></Projects>
      </Fade>
      </div>
      
    </div>
  );
};

export default Home;
