import React from "react";
import styles from "./App.module.scss";
import {StylesProvider} from "@material-ui/core/styles";

import Header from "./common/Components/Header/Header";
import Background from "./common/Components/Background/Background";
import Fade from 'react-reveal/Fade';

const dashboardRoutes = [];

function App() {
  //const ref = useRef(Parallax)
  return (
    <StylesProvider injectFirst>
      <div className={styles.App}>
        <Background></Background>

        <Header></Header>

        <div className={styles.main}>
        

          <div className={styles.titleGroup}>
          <Fade bottom>
            <h4 className={styles.titleName}> Dylan Wootton </h4>
            <h1 className={styles.title}> Data Visualization Engineer </h1>
            </Fade>
            <Fade bottom>
            <p className={styles.titleContent}>
              I develop interactive visualization tools that makes data science easier. Currently, I
              am visualizing product telemetry data at Microsoft.
              <br></br>
              <br></br>
              Previously visualizing <a href={"/project/ArcticExplorer"}>Arctic Ice</a> data at the{" "}
              <a target={"blank"} href={"https://vdl.sci.utah.edu/"}>
                Visualization Design Lab
              </a>
              . Future researcher at{" "}
              <a target={"blank"} href={"http://vis.csail.mit.edu/"}>
                MIT Viz
              </a>
              .
            </p> </Fade>
          </div>

        </div>
      </div>
    </StylesProvider>
  );
}

export default App;
