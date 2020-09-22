import React from "react";
import Particles from "react-particles-js";
import styles from "./Background.module.scss";
const Background = () => {
  return (
    <div className={styles.background}>
      <Particles
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
              opacity: 0.3,
              width: 1,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 20,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Background;
