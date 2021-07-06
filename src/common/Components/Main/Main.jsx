import React from "react";
import { MemoryRouter, Link as RouterLink, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
/*import Home from "../Home/Home";
import About from "../About/About.jsx"
import Portfolio from "../Projects/Portfolio.jsx"
import ProjectRoutes from "../Routes/ProjectRoutes";*/
import Loadable from 'react-loadable';

function Loading({ error }) {
  if (error) {
    return 'Oh nooess!';
  } else {
    console.log('in your loading!!!')
    return <h3>Loading...</h3>;
  }
}

const ProjectRoutes = Loadable({
  loader: () => import('../Routes/ProjectRoutes'),
  loading: Loading
});

const Portfolio = Loadable({
  loader: () => import('../Projects/Portfolio.jsx'),
  loading: Loading
});

const Home = Loadable({
  loader: () => import('../Home/Home'),
  loading: Loading
})

const About = Loadable({
  loader: () => import('../About/About'),
  loading: Loading
})


const Main = ({location})=>{
    return <TransitionGroup className="transition-group">
    <CSSTransition key={location.key} timeout={500} classNames="fade">
      <section className="route-section">
        <Switch>
            <div>
          <Route exact path="/About" component={About}></Route>
          <Route path="/Portfolio" component={Portfolio}>
          <ProjectRoutes/>
          </Route>
          <Route exact path="/" component={Home}></Route>

            
            </div>
         
        </Switch>
      </section>
    </CSSTransition>
  </TransitionGroup>
}

export default withRouter(Main);