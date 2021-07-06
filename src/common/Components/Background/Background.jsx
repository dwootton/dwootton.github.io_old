import React from "react";
import Particles from "react-particles-js";
import styles from "./Background.module.scss";
const Background = () => {
  return (
    <div className={styles.background}>
      {
      <Particles
      height={window.innerHeight}
      width={window.innerWidth}
        params={{
          fpsLimit: 45,
          particles: {
            color: {
              value: "#262626",
            },
            links: {
              color: "#262626",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            number: {
              density: {
                enable: true,
                value_area: 900,
              },
              value: 45,
            },
            opacity: {
              value: 0.2,
              animation:{
                enable:false
              }
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
            move : {
              speed : .65
            }
          },
          detectRetina: true,
        }}
      />
      }
    </div>
  );
};

export default Background;
