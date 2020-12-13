import React from "react";
import styles from "./FeaturedProjects.module.scss"
import classnames from 'classnames';

import Paper from '@material-ui/core/Paper';
import {Trail} from "../../Animations/Animations";

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import projects from '../../Configurations/projects';
import ProjectCard from './ProjectCard';

const FeaturedProjects = (props)=>{
    return (<div className={styles.featuredProjects}>
{
    <Grid container spacing={3}  >
        <Grid item xs={12} justify={'center'} >
                <p className={
                classnames(styles.projectGridTitle,'selectedProjects')
                }>Selected Projects</p>
        </Grid>
        {projects.map((project,index)=>{
          return <Grid key={index} item xs={12 } md={6}><ProjectCard projectConfiguration={project}></ProjectCard></ Grid>
        })}
     
</Grid>}

    </div>)
} 

const FeaturedProject = () =>{
  let classes = {}
  return (
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          style={{height:300,width:300, position:'absolute',bottom:0}}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>)
}
export default FeaturedProjects;