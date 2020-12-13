import React from 'react';
import {withRouter} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import moduleStyles from './ProjectCard.module.scss';
import classnames from 'classnames';
const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 480,
    margin: 'auto',
    borderRadius: 0,
    position: 'relative',
  },
  content: {
    padding: 12,
  },
  cta: {
    display: 'block',
    textAlign: 'center',
    color: '#fff',
    letterSpacing: '3px',
    fontWeight: 200,
    fontSize: 12,
  },
  title: {
    color: '#fff',
    letterSpacing: '2px',
  },
}));

export const ProjectCard = React.memo(function ProjectCard({projectConfiguration,history}) {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  console.log(mediaStyles);
  const shadowStyles = useLightTopShadowStyles();
  return (
    <Card className={classnames(styles.root,shadowStyles.root,moduleStyles.card)} onClick={()=>{history.push(`/Portfolio/${projectConfiguration.id}`)}}>
      <CardMedia
        classes={mediaStyles}
        className={moduleStyles.cardMedia}
        image={
            projectConfiguration.image
        }
      />
      <CardActionArea>
        <CardContent className={styles.content}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'top'}
            minHeight={420}
            color={'common.white'}
            textAlign={'center'}
            
          >
              <div className={moduleStyles.cardContent}>
                  <h1 className={classnames(styles.title,moduleStyles.cardTitle)}>{projectConfiguration.title}</h1>
            <p className={moduleStyles.cardDescription}>{projectConfiguration.shortDescription}</p>

              </div>
            
          </Box>
          <Typography className={classnames(styles.cta,moduleStyles.cardCTA)} variant={'overline'}>
            See Project
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
});

export default withRouter(ProjectCard)