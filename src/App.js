import React from "react";
import "./App.scss";
import Fade from 'react-reveal';
import styles from "./App.module.scss";
import {StylesProvider} from "@material-ui/core/styles";

import Header from "./common/Components/Header/Header";
import Home from "./common/Components/Home/Home";

const dashboardRoutes = [];

function App() {
  //const ref = useRef(Parallax)
  return (
    <StylesProvider injectFirst>
      <div className={styles.App}>
      <Fade top>
      <Header></Header>
      </Fade>
        

        <div className={styles.main}>
          <Home></Home>
        

        </div>
      </div>
    </StylesProvider>
  );
}

export default App;
