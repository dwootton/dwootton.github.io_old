// Button.stories.js

import React from 'react';
import  ProjectPage  from './ProjectPage';
import projects from '../../Configurations/projects';
import { storiesOf } from "@storybook/react";
import {
  withKnobs,

} from "@storybook/addon-knobs";

const stories = storiesOf("ProvTable", module);
stories.addDecorator(withKnobs);

stories.add("small", () => {
  return <ProjectPage projectConfiguration={projects[1]} />;
});
