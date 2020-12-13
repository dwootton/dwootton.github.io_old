import React from "react";
import styles from "./projectStyles.module.scss";
import { useSpring, animated } from "react-spring";
import { Fade } from "react-reveal";
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

const TitlePhoto = ({ image, title, titleQuestion, fullDescription,imageGallery }) => {
  return (
    <div>
      <div className={styles.titlePhoto} style={{ backgroundImage: image }}>
        <Fade delay={750}>
          <div className={styles.titleGroup}>
            <div className={styles.title}>{title}</div>
            <div className={styles.titleQuestion}>{titleQuestion}</div>
          </div>
        </Fade>
      </div>
      <div className={styles.content}>
      <Fade><h5 className={styles.fullDescription}>{fullDescription}</h5></Fade>
        {imageGallery && imageGallery.map(image=>{
            return <Fade><img className={styles.galleryImage} alt={image.description} src={image.image}></img> </Fade>
        })}
      </div>
    </div>
  );
};
export default ProjectPage;

export const SidePhotoFade = ({ children, delay = 0, ...props }) => {
  const items = React.Children.toArray(children);
  const spring = useSpring({
    delay: delay,
    from: { transform: "translate(400px,0)", opacity: 0 },
    opacity: 1,
    transform: "translate(0px,0px)",
  });
  return (
    <div>
      <animated.div className='trails-text' style={spring}>
        {children}
      </animated.div>
    </div>
  );
};
