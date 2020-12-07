import React from 'react';
import  { useTrail, useSpring, animated } from "react-spring";



export const  Trail = ({ children, delay=0, ...props }) =>{
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      trail:1000,
      delay:delay,
      from :{transform:'translate(-20px,0)', opacity:0}, opacity:1,transform:'translate(0px,0px)'
    })
    return (
        <div>
          {trail.map((spring, index) => (
            <animated.div
              key={index}
              className="trails-text"
              style={spring}>
              {items[index]}
            </animated.div>
          ))}
        </div>
    )
  }