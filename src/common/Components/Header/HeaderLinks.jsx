import React from "react";

// react components for routing our app without refresh
import {Link} from "react-router-dom";

// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "./Header.module.scss";
import Button from "@material-ui/core/Button";
import {IconButton} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
export default function HeaderLinks(props) {
  return (
    <List className={styles.list} style={{flexDirection: "row", display: "flex"}}>
      <ListItem>
        <Tooltip
          id='mail-tooltip'
          title='Click to copy email to clipboard.'
          placement={window.innerWidth > 500 ? "top" : "left"}
          classes={{tooltip: styles.tooltip}}>
          <IconButton
            aria-label='delete'
            onClick={() => {
              copyToClipboard("wootton.dylan@gmail.com");
              alert("copied email to keyboard");
            }}>
            <MailIcon color={"white"} />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={styles.listItem}>
        <Tooltip
          id='instagram-twitter'
          title='Follow us on twitter'
          placement={window.innerWidth > 500 ? "top" : "left"}
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
          title='Follow me on Linkedin'
          placement={window.innerWidth > 500 ? "top" : "left"}
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
