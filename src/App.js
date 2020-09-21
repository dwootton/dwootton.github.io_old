import React, {useState, useEffect} from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";

import {curveBasis} from "@vx/curve";
import {AreaClosed} from "@vx/shape";
import {Bar} from "@vx/shape";
import {Group} from "@vx/group";
import {scaleBand, scaleLinear} from "@vx/scale";
import {Keyframes, animated} from "react-spring/renderprops";
import Header from "./common/Components/Header/Header";
import ParentSize from "@vx/responsive/lib/components/ParentSize";
import {GradientTealBlue, LinearGradient} from "@vx/gradient";
import {extent, max} from "d3-array";
import {Spring} from "react-spring/renderprops";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";

const data = [
  {
    date: new Date("2018-04-08T12:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-08T11:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-08T10:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-08T09:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-08T08:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-08T07:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-08T06:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-08T05:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-08T04:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-08T03:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-08T02:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-08T01:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-08T00:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-07T23:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-07T22:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-07T21:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-07T20:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-07T19:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-07T18:33:40.624Z"),
    value: 50,
  },
  {
    date: new Date("2018-04-07T17:33:40.624Z"),
    value: 50,
  },
];

const xAccessor = (d) => d.date;
const yAccessor = (d) => d.value;

export const AreasExample = () => {
  const [toggle, setToggle] = useState(true);

  console.log("hi");

  function toggleState() {
    setToggle(!toggle);
  }
  const background = "#010c30"; //"#282c34"; //"#3b6978";
  const accentColor = "#57caf7"; //"#edffea";
  return (
    <ParentSize>
      {({width, height}) => {
        const numBars = Math.ceil(width / 100) + 2;
        console.log(width, numBars, data);

        let dataToUse = data.slice(0, numBars);
        const heightFactor = 1.6;
        if (width === 0 || height === 0) {
          return <div> </div>;
        }
        const xScale = scaleBand({
          rangeRound: [-30, width + 30], // map so bars extend beyond viewport
          domain: dataToUse.map(xAccessor),
          padding: 0.4,
        });

        const yMax = max(dataToUse, yAccessor);
        const yScale = scaleLinear({
          range: [height / heightFactor, 0],
          domain: [0, yMax],
          nice: true,
        });
        console.log(dataToUse, data);
        const interpolate = dataToUse.map((d) => {
          return 0.1 * Math.random() * yMax + 0.25 * yMax;
        });

        return (
          <div
            style={{
              width: "100%",
              height: "70%",
              cursor: "pointer",
              background: "#fff", //"#282c34", //background, //"#36454F",
              zIndex: 0,
            }}
            onClick={toggleState}>
            <svg
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                transform: "scale(1,-1)",
              }}
              width={width}
              height={height / heightFactor}>
              <LinearGradient
                id='gradient'
                from={"#000"}
                to={"#E4EFFA"}
                fromOpacity={0} // as SVG is flipped
                toOpacity={1}
                gradientUnits='userSpaceOnUse'
              />
              <g id={styles.barsGroup} fill={"url(#gradient)"}>
                {dataToUse.map((datum, index) => {
                  const scaleFactor = 80; //props.interpolate[index];
                  //const letter = getLetter(d);
                  const barWidth = xScale.bandwidth();
                  const barHeight = yMax - yScale(yAccessor(datum));
                  const barX = xScale(xAccessor(datum));
                  return <rect key={index} x={barX} y={0} width={barWidth} height={barHeight} />;
                })}
              </g>
            </svg>
          </div>
        );
      }}
    </ParentSize>
  );
};

function App() {
  let parallax;
  const pages = 2;
  //const ref = useRef(Parallax)
  return (
    <div className={styles.App}>
      <Header></Header>
      <div className={styles.main}>
        <div className={styles.titleGroup}>
          <h4 className={styles.titleName}> Dylan Wootton </h4>
          <h1 className={styles.title}> Data Visualization Engineer </h1>
          <p className={styles.titleContent}>
            I develop interactive visualization tools that make the data analytics process easier.
            Currently, I am visualizing product telemetry data at Microsoft.
            <br></br>
            <br></br>
            Previously at the{" "}
            <a target={"blank"} href={"https://vdl.sci.utah.edu/"}>
              Visualization Design Lab
            </a>
            . Future researcher at{" "}
            <a target={"blank"} href={"http://vis.csail.mit.edu/"}>
              MIT Viz
            </a>
            .
          </p>
        </div>
        <div height={"100vh"}>
          <AreasExample> </AreasExample>
        </div>
      </div>
    </div>
  );
}

export default App;
