import React , {useState}from "react";

// react components for routing our app without refresh
import {Link} from "react-router-dom";

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

  return (
    <List className={styles.list} style={{flexDirection: "row", display: "flex"}}>
      <ListItem className={styles.listItem}>
        <Tooltip
        arrow
        interactive
          id='mail-tooltip'
          title='Click to copy email to clipboard.'
          TransitionComponent={Fade} TransitionProps={{ timeout: {appear:100, enter: 100, exit:900} }}
          placement={window.innerWidth > 500 ? "bottom" : "left"}
          classes={{tooltip: styles.tooltip}}
          >
          <IconButton
            aria-label='delete'
            onClick={() => {
              //console.log(document.querySelector('#mail-tooltip div'))
              document.querySelector('#mail-tooltip div').style.backgroundColor = "#CCFFCC";
              document.querySelector('#mail-tooltip div').innerHTML = "Copied!";


              copyToClipboard("wootton.dylan@gmail.com");
              document.querySelector('#mail-tooltip').focus();
            }}>
            <MailIcon color={"white"} />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={styles.listItem}>
        <Tooltip
          id='instagram-twitter'
          title='Follow me on twitter'
          placement={window.innerWidth > 500 ? "bottom" : "left"}
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
          placement={window.innerWidth > 500 ? "bottom" : "left"}
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

function copyToClipboard(text) {
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute("value", text);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}
