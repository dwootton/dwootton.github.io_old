import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import { curveBasis } from "@vx/curve";
import { AreaClosed } from "@vx/shape";
import { scaleTime, scaleLinear } from "@vx/scale";
import ParentSize from "@vx/responsive/lib/components/ParentSize";
import { GradientTealBlue, LinearGradient } from "@vx/gradient";
import { extent, max } from "d3-array";
import { Spring } from "react-spring/renderprops";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const data = [
  {
    date: new Date("2018-04-08T12:33:40.624Z"),
    value: 2110,
  },
  {
    date: new Date("2018-04-08T11:33:40.624Z"),
    value: 1156,
  },
  {
    date: new Date("2018-04-08T10:33:40.624Z"),
    value: 715,
  },
  {
    date: new Date("2018-04-08T09:33:40.624Z"),
    value: 2797,
  },
  {
    date: new Date("2018-04-08T08:33:40.624Z"),
    value: 2361,
  },
  {
    date: new Date("2018-04-08T07:33:40.624Z"),
    value: 731,
  },
  {
    date: new Date("2018-04-08T06:33:40.624Z"),
    value: 908,
  },
  {
    date: new Date("2018-04-08T05:33:40.624Z"),
    value: 691,
  },
  {
    date: new Date("2018-04-08T04:33:40.624Z"),
    value: 1408,
  },
  {
    date: new Date("2018-04-08T03:33:40.624Z"),
    value: 1748,
  },
  {
    date: new Date("2018-04-08T02:33:40.624Z"),
    value: 2834,
  },
  {
    date: new Date("2018-04-08T01:33:40.624Z"),
    value: 310,
  },
  {
    date: new Date("2018-04-08T00:33:40.624Z"),
    value: 2877,
  },
  {
    date: new Date("2018-04-07T23:33:40.624Z"),
    value: 2792,
  },
  {
    date: new Date("2018-04-07T22:33:40.624Z"),
    value: 250,
  },
  {
    date: new Date("2018-04-07T21:33:40.624Z"),
    value: 1602,
  },
  {
    date: new Date("2018-04-07T20:33:40.624Z"),
    value: 1871,
  },
  {
    date: new Date("2018-04-07T19:33:40.624Z"),
    value: 250,
  },
  {
    date: new Date("2018-04-07T18:33:40.624Z"),
    value: 2897,
  },
  {
    date: new Date("2018-04-07T17:33:40.624Z"),
    value: 1902,
  },
];

const xAccessor = (d) => d.date;
const yAccessor = (d) => d.value;

export class AreasExample extends React.Component {
  state = {
    toggle: true,
  };
  toggle = () =>
    this.setState((state) => ({
      toggle: !state.toggle,
    }));
  render() {
    const background = "#3b6978";
    const accentColor = "#edffea";
    return (
      <ParentSize>
        {({ width, height }) => {
          const heightFactor = 1.6;
          if (width === 0 || height === 0) {
            return <div></div>;
          }
          console.log(width, height);
          const xScale = scaleTime({
            range: [0, width],
            domain: extent(data, xAccessor),
          });
          const yMax = max(data, yAccessor);
          const yScale = scaleLinear({
            range: [height / heightFactor, 0],
            domain: [yMax, 0],
            nice: true,
          });
          console.log(xScale.domain(), yScale.domain());
          const interpolate = data.map((d) => {
            return 0.5 * Math.random() * yMax + 0.35 * yMax;
          });
          return (
            <div
              style={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
                background: "#36454F",
              }}
              onClick={this.toggle}
            >
              <svg
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                }}
                width={width}
                height={height / heightFactor}
              >
                <LinearGradient
                  id="gradient"
                  from={accentColor}
                  to={background}
                  toOpacity={0.0}
                />
                <g>
                  <Spring
                    to={{
                      interpolate,
                    }}
                  >
                    {(props) => (
                      <AreaClosed
                        data={data.map((d, i) => ({
                          ...d,
                          value: props.interpolate[i],
                        }))}
                        xScale={xScale}
                        yScale={yScale}
                        x={(data) => xScale(xAccessor(data))}
                        y={(data) => yScale(yAccessor(data))}
                        strokeWidth={2}
                        stroke={"url(#gradient)"}
                        fill={"url(#gradient)"}
                        curve={curveBasis}
                      />
                    )}
                  </Spring>
                </g>
              </svg>
            </div>
          );
        }}
      </ParentSize>
    );
  }
}

function App() {
  let parallax;
  const pages = 1;
  //const ref = useRef(Parallax)
  return (
    <div
      className={styles.parallaxContainer}
      style={{ height: `${200}vh`, width: "100vw" }}
    >
      <Parallax pages={pages} ref={(ref) => (parallax = ref)}>
        <ParallaxLayer offset={0} speed={1}>
          <div className={styles.App}>
            <AreasExample> </AreasExample>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <div
            height={"100%"}
            width={"100%"}
            styles={{ background: "red" }}
          ></div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
