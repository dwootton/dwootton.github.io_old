import React from "react";
import { Route, Switch , useRouteMatch} from "react-router-dom";
import projects from "../../Configurations/projects";
import ProjectPage from "../Projects/ProjectPage";

const ProjectRoutes = () => {
    let match = useRouteMatch();

return <Switch>{projects.map((project) => {
    console.log(project.id);
    return (
      <Route
        path={`${match.url}/${project.id}`}
        component={() => <ProjectPage projectConfiguration={project}></ProjectPage>}></Route>
    );
  })}</Switch>
};

export default ProjectRoutes;
