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
    longTitle:"reVISit – Analysis Tool for User Interactions",
    image: "https://i.imgur.com/R9kGn0y.png",
    shortName: "RV",
    client:"Visualization Design Lab",
    clientURL:"https://vdl.sci.utah.edu",
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
    titleQuestion: "How can we design better interactive visualizations?",
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
    paperURL:"https://vdl.sci.utah.edu/publications/2021_chi_revisit/"
  },
  {
    id: "arcticExplorer",
    title: "Arctic Explorer",
    longTitle:"Arctic Explorer – Google Maps for the Arctic",
    shortName: "AE",
    year: 2019,
    client:"The Golden Lab",
    clientURL:"https://www.math.utah.edu/~golden/",
    image: "https://i.imgur.com/9gGUAt5.png",
    liveURL: "http://dylanwootton.com/Arctic-Explorer",
    githubURL: "https://github.com/dwootton",
    videoURL:"https://www.youtube.com/watch?v=EbsGiAUuHX0",
    projectTags: [PROJECT_TAG_ENUM["viz"], PROJECT_TAG_ENUM["fs"]],
    skills: [SKILLS_ENUMS["d3"], SKILLS_ENUMS["js"], SKILLS_ENUMS["interviews"]],
    featured: true,
    titleQuestion:
      "In a rapidly changing environment, how can we better understand trends of sea-ice density?",
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
  },
  {
    id: "aqExplorer",
    title: "Air U",
    shortName: "AQ",
    longTitle:"Air U – Revealing Bias in Air Quality Monitoring",
    image: "https://i.imgur.com/Jrd4WbI.png",
    shortDescription:
      "The Air U project investigates the placement of air quality sensors and reveals the importance of environmental-justice.",
    fullDescription:
      `Poor air quality impacts public health due to increased incidence of cancers, heart diseases, and various respiratory disorders. Many Utah cities have hazardous air quality episodes as a result of inversions and forest fires; however, despite its impact on our community, the data obtained about PM 2.5 levels is often course- often being measured for an entire zip code. Such granularity is unacceptable as research suggests that microclimates of pollution exist that are not captured by these measurements. 

      As such, a model was built to provide finer resolution PM 2.5 estimates throughout SLC. However, this model exhibited high levels of uncertainty over poorer neighborhoods in SLC.
      
      The Air U project involved uncovering, quantifying, and remediating this bias and constituted my undergraduate thesis work.`
      ,
    client:"Air Q and U",
    clientURL:"https://aqandu.org/",
    year: 2018,
    githubURL: "https://github.com/dwootton/AQExplorer",
    projectTags: [PROJECT_TAG_ENUM["viz"], PROJECT_TAG_ENUM["fe"]],
    skills: [SKILLS_ENUMS["d3"], SKILLS_ENUMS["js"], SKILLS_ENUMS["interviews"]],
    videoURL: "https://youtu.be/6SYMfRFwgu8",
    featured: true,
    paperURL:"https://raw.githubusercontent.com/dwootton/dwootton.github.io/3b25557fb090d63c05fe5e4d821fe772160629ea/assets/DylanWoottonThesis.pdf"
  }
];

export default projects;
