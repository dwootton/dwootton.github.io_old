import React from "react";
import "./App.scss";
import { MemoryRouter } from "react-router-dom";

import styles from "./App.module.scss";
import { StylesProvider } from "@material-ui/core/styles";

import Header from "./common/Components/Header/Header";
import Main from './common/Components/Main/Main'

function App() {
  return (
    <StylesProvider injectFirst>
      <div className={styles.App}>

        <MemoryRouter initialEntries={["/Home"]} initialIndex={0}>
        <Header></Header>

              <div className={styles.main}>
                <Main></Main>
              </div>
          </MemoryRouter>
        
      </div>
    </StylesProvider>
  );
}

export default App;
