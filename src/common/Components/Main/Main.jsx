import React from "react";
import { MemoryRouter, Link as RouterLink, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "../Home/Home";
import About from "../About/About"
import ProjectRoutes from "../Routes/ProjectRoutes";

const Main = ({location})=>{
    return <TransitionGroup className="transition-group">
    <CSSTransition key={location.key} timeout={500} classNames="fade">
      <section className="route-section">
        <Switch>
            <div>
            <Route exact path="/" component={Home}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Portfolio">
          <ProjectRoutes/>
          </Route>
            
            </div>
         
        </Switch>
      </section>
    </CSSTransition>
  </TransitionGroup>
}

export default withRouter(Main);