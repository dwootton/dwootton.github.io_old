import React, { useState } from "react";

// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import * as animationData from "./copiedEmail.json";
// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "./Header.module.scss";
import Button from "@material-ui/core/Button";
import Fade from "react-reveal";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { useLocation } from "react-router-dom";

import { IconButton } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import  { useTrail, useSpring, animated } from "react-spring";

const MENU_ITEM_TYPES = {
  internalLink: "internalLink",
  externalLink: "externalLink",
};
const MENU_ITEMS = [
  { to: "/", type: "internalLink", displayText: "Portfolio" },
  { to: "/About", type: "internalLink", displayText: "About" },
  { to: "https://www.twitter.com/WoottonDylan", type: "externalLink", displayText: "Twitter" },
  {
    to: "https://www.linkedin.com/in/dylanwootton/",
    type: "externalLink",
    displayText: "LinkedIn",
  },
];
const MenuItem = (props) => {
  const {item, selected} = props;
  let content;
  if (item.type === MENU_ITEM_TYPES.internalLink) {
    content = <Link to={item.to}>{item.displayText}</Link>;
  } else if (item.type === MENU_ITEM_TYPES.externalLink) {
    content = (<a href={item.to} target='_blank' rel='noopener'>
      {item.displayText}
    </a>)
  }
  return <li {...props}>{content}</li>;
};


const CustomFade = (props)=>{
  const animatedProps = useSpring({opacity:1,transform:'translate(0px,0px)', from : {opacity:0, transform:'translate(-25px,0px)'}})
return <animated.div style={animatedProps}>{props.children}</animated.div>
}

function Trail({ children, delay=0, ...props }) {
  const items = React.Children.toArray(children)
  console.log('dywootto',items);
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

const NavigationMenu = () => {
  const location = useLocation();

  return (
    <div class={styles["overlay-content"]}>
        <ul>
        <Trail delay={200}>

          {MENU_ITEMS.map((item,index) => {
            return<MenuItem item={item} selected={location === item.to}></MenuItem>;
          })}
</Trail>
        </ul>
    </div>
  );
};
export default NavigationMenu;

function OverlayFooter(props) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mapper = {
    toCopy: <span>Click to copy my email!</span>,
    copied: (
      <div>
        <Lottie
          options={defaultOptions}
          height={40}
          width={40}
          isPaused={false}
          isStopped={false}
        />
        <span className={styles.copiedText}>Copied Email!</span>
      </div>
    ),
  };
  const [emailContent, setEmailContent] = useState("toCopy");
  return (
    <List className={styles.list} style={{ flexDirection: "row", display: "flex" }}>
      <ListItem className={styles.listItem}>
        <Tooltip
          id='mail-tooltip'
          title={mapper[emailContent]}
          placement={"bottom"}
          classes={{ tooltip: styles.tooltip }}
          enterDelay={500}
          leaveDelay={200}>
          <IconButton
            aria-label='copyEmail'
            className={styles.listItemButton}
            onMouseLeave={() => {
              setTimeout(function () {
                setEmailContent("toCopy");
              }, 400);
            }}
            onClick={(event) => {
              //console.log(document.querySelector('#mail-tooltip div'))
              //document.querySelector('#mail-tooltip div').style.backgroundColor = "#CCFFCC";
              //document.querySelector('#mail-tooltip div').innerHTML = "Copied!";

              copyEmail(event);
              setEmailContent("copied");
            }}>
            <MailIcon color={"white"} />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={styles.listItem}>
        <Tooltip
          id='instagram-twitter'
          title='Follow me on twitter'
          placement={"bottom"}
          classes={{ tooltip: styles.tooltip }}>
          <IconButton
            className={styles.listItemButton}
            aria-label='delete'
            href='https://twitter.com/WoottonDylan'
            target='_blank'
            rel='noopener noreferrer'>
            <TwitterIcon color={"white"} />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={styles.listItem}>
        <Tooltip
          id='instagram-twitter'
          title='Connect with me on Linkedin'
          placement={"bottom"}
          classes={{ tooltip: styles.tooltip }}>
          <IconButton
            className={styles.listItemButton}
            aria-label='delete'
            href='https://www.linkedin.com/in/dylanwootton/'
            target='_blank'
            rel='noopener noreferrer'>
            <LinkedInIcon color={"white"} />
          </IconButton>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export function HeaderLinksOnTop(props) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mapper = {
    toCopy: <span>Click to copy my email!</span>,
    copied: (
      <div>
        <Lottie
          options={defaultOptions}
          height={40}
          width={40}
          isPaused={false}
          isStopped={false}
        />
        <span className={styles.copiedText}>Copied Email!</span>
      </div>
    ),
  };
  const [emailContent, setEmailContent] = useState("toCopy");
  return (
    <List className={styles.list} style={{ flexDirection: "column", display: "flex" }}>
      <ListItem className={styles.listItem}>
        <Tooltip
          id='mail-tooltip'
          title={mapper[emailContent]}
          placement={"bottom"}
          classes={{ tooltip: styles.tooltip }}
          enterDelay={500}
          leaveDelay={200}>
          <IconButton
            aria-label='copyEmail'
            className={styles.listItemButton}
            onMouseLeave={() => {
              setTimeout(function () {
                setEmailContent("toCopy");
              }, 400);
            }}
            onClick={(event) => {
              //console.log(document.querySelector('#mail-tooltip div'))
              //document.querySelector('#mail-tooltip div').style.backgroundColor = "#CCFFCC";
              //document.querySelector('#mail-tooltip div').innerHTML = "Copied!";

              copyEmail(event);
              setEmailContent("copied");
            }}>
            <MailIcon color={"white"} />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={styles.listItem}>
        <Tooltip
          id='instagram-twitter'
          title='Follow me on twitter'
          placement={"bottom"}
          classes={{ tooltip: styles.tooltip }}>
          <IconButton
            className={styles.listItemButton}
            aria-label='delete'
            href='https://twitter.com/WoottonDylan'
            target='_blank'
            rel='noopener noreferrer'>
            <TwitterIcon color={"white"} />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={styles.listItem}>
        <Tooltip
          id='instagram-twitter'
          title='Connect with me on Linkedin'
          placement={"bottom"}
          classes={{ tooltip: styles.tooltip }}>
          <IconButton
            className={styles.listItemButton}
            aria-label='delete'
            href='https://www.linkedin.com/in/dylanwootton/'
            target='_blank'
            rel='noopener noreferrer'>
            <LinkedInIcon color={"white"} />
          </IconButton>
        </Tooltip>
      </ListItem>
    </List>
  );
}

async function copyEmail(e) {
  if (navigator.clipboard) {
    e.preventDefault();
    //e.nativeEvent.preventDefault();
    //e.nativeEvent.stopPropogation();
    await navigator.clipboard.writeText("wootton.dylan@gmail.com");
    return;
  }
}

function copyToClipboard(text) {
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute("value", text);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}
