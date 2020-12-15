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
    image: "https://i.imgur.com/R9kGn0y.png",
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
    titleQuestion: "How can we better design interactions for visualizations?",
    videoURL: "https://youtu.be/-wzOqeDXFI0",
    featured: true,
    shortDescription:
      "reVISit is a visualization tool that enables the exploration of user interaction data.",
    fullDescription:
      "Understanding user interactions with websites is hard. Often times, UX researchers are tasked with parsing through gigabytes of telemetry logs in order to understand what it is that users are doing. reVISit is an open-source visualization tool that enables researchers to quickly see users interactions and how those correlate with other tracked metrics. ",
    imageGallery: [
      { description: "Home interface of reVISit.", image: "https://i.imgur.com/l4zUeF6.png" },
      { description: "reVISit workstream integration.", image: "https://i.imgur.com/XTPQW4o.png" },
      {
        description: "Qualitative Coding in the reVISit interface.",
        image: "https://i.imgur.com/exavJfD.png",
      },
    ],
  },
  {
    id: "arcticExplorer",
    title: "Arctic Explorer",
    shortName: "AE",
    year: 2019,
    image: "https://i.imgur.com/9gGUAt5.png",
    liveURL: "http://dylanwootton.com/Arctic-Explorer",
    githubURL: "https://github.com/dwootton",
    videoURL:"https://www.youtube.com/watch?v=EbsGiAUuHX0",
    projectTags: [PROJECT_TAG_ENUM["viz"], PROJECT_TAG_ENUM["fs"]],
    skills: [SKILLS_ENUMS["d3"], SKILLS_ENUMS["js"], SKILLS_ENUMS["interviews"]],
    featured: true,
    titleQuestion:
      "In a rapidly changing environment, how can we understand trends of sea-ice density?",
    shortDescription:
      "Arctic Explorer enables researchers to analyze sea-ice concentration data for the Arctic.",
    fullDescription:
      "The Arctic seascape plays an important role in North American trade and defense; however, over recent years, the Arctic has undergone radical changes, altering current shipping routes and opening up new previously blocked paths. This work presents Arctic Explorer, a tool to visualize sea-ice concentration along paths over time. Arctic Explorer could be used to circumnavigate areas expected to be blocked with ice and discover new routes that may have opened up. ",
    imageGallery: [
      {
        description: "Mockup image of the Arctic Explorer Interface",
        image: "https://i.imgur.com/BXEx4bd.png",
      },
      {
        description: "The Arctic Explorer User Interface",
        image: "https://i.imgur.com/YJj0HDy.png",
      },
      { description: "Guide for how to read a TOSM", image: "https://i.imgur.com/4Lixmqf.png" },
      {
        description: "Interaction across northwest passage",
        image: "https://i.imgur.com/s96oiXg.gif",
      },
      {
        description: "Whiteboard prototypes of Arctic Explorer.",
        image: "https://i.imgur.com/MiY0wQ7.png",
      },
      {
        description: "Whiteboard prototype of interactions.",
        image: "https://i.imgur.com/tgI4smh.png",
      },
      {
        description: "Beautiful Temporal Ordered Spatial Matrix for the Northwest Passage",
        image: "https://i.imgur.com/VzhnoC1.png",
      },
    ],
  }/*,
  {
    id: "aqExplorer",
    title: "AirU",
    shortName: "AQ",
    image: "",
    year: 2018,
    liveURL: "http://dylanwootton.com/AQExplorer",
    githubURL: "https://github.com/dwootton/AQExplorer",
    projectTags: [PROJECT_TAG_ENUM["viz"], PROJECT_TAG_ENUM["fe"]],
    skills: [SKILLS_ENUMS["d3"], SKILLS_ENUMS["js"], SKILLS_ENUMS["interviews"]],
    videoURL: "https://youtu.be/6SYMfRFwgu8",
    featured: true,
  },*/
];

export default projects;
