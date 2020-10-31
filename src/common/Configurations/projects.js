const SKILLS_ENUMS = {
  d3: "d3.js",
  react: "React",
  MUI: "Material UI",
  python: "Python",
  flask: "Flask",
  dm: "Data Mining",
  js: "Javascript",
  interviews: "Interviewing",
};

const PROJECT_TAG_ENUM = {
  IxD: "Interaction Design",
  viz: "Visualization",
  fs: "Full-stack",
  fe: "Front-end",
  be: "Back-end",
  de: "Data Engineering",
  db: "Data Bases",
};

let projects = [
  {
    id: "reVISit",
    title: "reVISit",
    shortName: "RV",
    year: 2020,
    liveURL: "https://revisit-analytics.github.io/reVISit/",
    githubURL: "https://github.com/visdesignlab/reVISit",
    projectTags: [PROJECT_TAG_ENUM["IxD"], PROJECT_TAG_ENUM["viz"], PROJECT_TAG_ENUM["fs"]],
    skills: [
      SKILLS_ENUMS["d3"],
      SKILLS_ENUMS["react"],
      SKILLS_ENUMS["flask"],
      SKILLS_ENUMS["python"],
      SKILLS_ENUMS["js"],
      SKILLS_ENUMS["dm"],
      SKILLS_ENUMS["interviews"],
    ],
    videoURL: "",
    featured: true,
    shortDescription:
      "reVISit is a visualization tool that enables the exploration of user interaction data.",
    fullDescription:
      "Understanding user interactions with websites is hard. Often times, UX researchers are tasked with parsing through gigabytes of telemetry logs in order to understand what it is that users are doing. reVISit is an open-source visualization tool that enables users to quickly see users interactions and how those correlate with other tracked metrics. ",
  },
  {
    id: "arcticExplorer",
    title: "Arctic Explorer",
    shortName: "AE",
    year: 2019,
    liveURL: "http://dylanwootton.com/Arctic-Explorer",
    githubURL: "https://github.com/dwootton",
    projectTags: [PROJECT_TAG_ENUM["viz"], PROJECT_TAG_ENUM["fs"]],
    skills: [SKILLS_ENUMS["d3"], SKILLS_ENUMS["js"], SKILLS_ENUMS["interviews"]],
    featured: true,
    shortDescription:
      "Arctic Explorer enables researchers to analyze sea-ice concentration data for the Arctic.",
    fullDescription:
      "Arctic Explorer enables Arctic researchers to study how Arctic Ice concentration changes over time. ",
  },
  {
    id: "aqExplorer",
    title: "AQ Explorer",
    shortName: "AQ",
    year: 2018,
    liveURL: "http://dylanwootton.com/AQExplorer",
    githubURL: "https://github.com/dwootton/AQExplorer",
    projectTags: [PROJECT_TAG_ENUM["viz"], PROJECT_TAG_ENUM["fe"]],
    skills: [SKILLS_ENUMS["d3"], SKILLS_ENUMS["js"], SKILLS_ENUMS["interviews"]],
    videoURL: "https://youtu.be/6SYMfRFwgu8",
    featured: true,
  },
];

export default projects;