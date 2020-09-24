import React , {useState}from "react";

// react components for routing our app without refresh
import {Link} from "react-router-dom";
import Lottie from 'react-lottie';
import * as animationData from './copiedEmail.json'
// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "./Header.module.scss";
import Button from "@material-ui/core/Button";
import Fade from '@material-ui/core/Fade';

import {IconButton} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

export default function HeaderLinks(props) {
  console.log(animationData);
  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const mapper = {
    'toCopy' : <span>Click to copy my email!</span>,
    'copied': <div><Lottie options={defaultOptions}
    height={40}
    width={40}
    isPaused={false}
    isStopped={false}
  />
  <span className={styles.copiedText}>Copied!</span>
  </div>
  }
  const [emailContent, setEmailContent]= useState('toCopy')
  return (
    <List className={styles.list} style={{flexDirection: "row", display: "flex"}}>
      <ListItem className={styles.listItem}>
        <Tooltip

          id='mail-tooltip'
          title={mapper[emailContent]}
          placement={"bottom"}
          classes={{tooltip: styles.tooltip}}
          >
          <IconButton
            aria-label='copyEmail'
            onMouseLeave={()=>{
              setTimeout(function () {
                setEmailContent('toCopy')
              }, 400);
              }}
            onClick={(event) => {
              //console.log(document.querySelector('#mail-tooltip div'))
              //document.querySelector('#mail-tooltip div').style.backgroundColor = "#CCFFCC";
              //document.querySelector('#mail-tooltip div').innerHTML = "Copied!";

              copyEmail(event);
              setEmailContent('copied');

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
          classes={{tooltip: styles.tooltip}}>
          <IconButton
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
          classes={{tooltip: styles.tooltip}}>
          <IconButton
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

async function copyEmail(e){
  if(navigator.clipboard){
    e.preventDefault();
    //e.nativeEvent.preventDefault();
    //e.nativeEvent.stopPropogation();
    await navigator.clipboard.writeText('wootton.dylan@gmail.com');
    return
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
