import React from "react";
import styles from "./projectStyles.module.scss";
import { Fade } from "react-reveal";

import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'; // demo video
import WebIcon from '@material-ui/icons/Web'; // live url
import DescriptionIcon from '@material-ui/icons/Description'; // paper 
import { WebAsset, GitHub, YouTube, Description } from '@material-ui/icons';


const ProjectPage = ({ projectConfiguration }) => {
  return (
    <div>
      <TitlePhoto
        client={projectConfiguration.client}
        title={projectConfiguration.title}
        {...projectConfiguration}
        titleQuestion={projectConfiguration.titleQuestion}
        image={`url(${projectConfiguration.image})`}></TitlePhoto>
    </div>
  );
};


const TitlePhoto = (props) => {
  const { image, title, titleQuestion, fullDescription,imageGallery, liveURL, githubURL, videoURL } = props;
  return (
    <div>
      <Fade delay={100}>
      <div className={styles.titlePhoto} style={{ backgroundImage: image }}>
      </div>
      </Fade>
      <Fade top delay={250} distance={'15px'} >
          <div className={styles.titleGroup}>
            <div className={styles.title}>{title}</div>
            <div className={styles.titleQuestion}>{titleQuestion}</div>
          </div>
        </Fade>
      <div className={styles.content}>
        <ProjectSection {...props}>

        </ProjectSection>
     
        {imageGallery && imageGallery.map(image=>{
            return <Fade delay={800}><img className={styles.galleryImage} alt={image.description} src={image.image}></img> </Fade>
        })}
      </div>
    </div>
  );
};

const ProjectSection = (props)=>{
  const { image, title, longTitle,client,clientURL,titleQuestion, fullDescription,year,imageGallery, liveURL, githubURL,paperURL, videoURL } = props;
  return (
  <div className={styles.projectInformation}>
    <div className={styles.projectMetaDetails}>
      <Fade delay={350}>
      <div>
        <h5>Project Title</h5>
        <h1>{longTitle}</h1>
      </div>
      </Fade>
      
      {client && (
        <Fade delay={450}>
          <div>
            <h5>Client</h5>
            <h4 class="header-dark"><a href={clientURL} target="_blank" >{client}</a></h4>
          </div>
        </Fade>
      )}
     
      
  
        <Fade delay={550}>
        <div><h5>Year</h5>
  <h4 class="header-dark">{year}</h4></div>
        </Fade>
  
  <Fade delay={600}>
  <div>
     <h5>Asset Links</h5>

    {liveURL && <a href={liveURL} target="_blank" className={styles.assetLink}><WebAsset></WebAsset></a>}
    {githubURL && <a href={githubURL} target="_blank" className={styles.assetLink}><GitHub></GitHub></a>}
    {videoURL && <a href={videoURL} target="_blank" className={styles.assetLink}><YouTube></YouTube></a>}
    {paperURL && <a href={paperURL} target="_blank" className={styles.assetLink}><Description></Description></a>}


  </div>
    </Fade>
  
  </div>
    <div className={styles.projectDescription}><Fade delay={450}>{fullDescription}
      </Fade></div>
  </div>
)
}

const ExternalLinks = ({liveURL,githubURL,videoURL})=>{
    return <div className={styles.externalLinks}>{liveURL && <a href={liveURL} rel="noopener noreferrer nofollow" target="_blank">Software</a>}{githubURL && <a href={githubURL}  target="_blank" rel="noopener noreferrer nofollow">Code</a>}{videoURL && <a href={videoURL} target="_blank" rel="noopener noreferrer nofollow">Demo</a>}</div>
}

export default ProjectPage;
