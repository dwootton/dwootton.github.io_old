import React from "react";
import { MemoryRouter, Link as RouterLink, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "../Home/Home";
import About from "../About/About"

const Main = ({location})=>{
    return <TransitionGroup className="transition-group">
    <CSSTransition key={location.key} timeout={500} classNames="fade">
      <section className="route-section">
        <Switch location={location}>
          <Route path="/Home" component={Home}></Route>
          <Route path="/About" component={About}></Route>

        </Switch>
      </section>
    </CSSTransition>
  </TransitionGroup>
}

export default withRouter(Main);