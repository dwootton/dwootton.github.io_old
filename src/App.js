import React from "react";
import "./App.scss";
import { Router } from "react-router-dom";

import styles from "./App.module.scss";
import { StylesProvider } from "@material-ui/core/styles";

import Header from "./common/Components/Header/Header";
import Main from "./common/Components/Main/Main";
import { createBrowserHistory as createHistory } from "history";

function App() {
  const history = createHistory();
  history.listen((location,action)=>{
    window.scrollTo(0,0);
  })
  return (
    <StylesProvider injectFirst>
      <div className={styles.App}>
        <Router history={history}>
          <Header></Header>

          <div className={styles.main}>
            <Main></Main>
          </div>
        </Router>
      </div>
    </StylesProvider>
  );
}

export default App;
