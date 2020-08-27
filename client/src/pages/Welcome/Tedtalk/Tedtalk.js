import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
   CardMedia,
   Button,
   Typography,
   IconButton,
   Grid,
} from '@material-ui/core';
import PlayArrow from '@material-ui/icons/PlayArrow';
import TedtalkBackground from './fakeTedTalk.png';

function Tedtalk() {
   const classes = useStyles();

   return (
      <CardMedia
         className={classes.imageBackground}
         image={TedtalkBackground}
         title="Featured on Fake TedTalk"
      >
         <Grid xs={6} style={{ textAlign: 'left', marginLeft: '50px' }}>
            <IconButton
               href="https://www.youtube.com/watch?v=_ZBKX-6Gz6A&feature=youtu.be"
               target="_blank"
            >
               <PlayArrow className={classes.iconButtonStyle} />
            </IconButton>
            <Typography variant="h2" className={classes.videoTitleStyle}>
               Chief System was featured on "Ted Talk"
            </Typography>
            <Typography variant="body1" className={classes.speakerStyle}>
               Pat Kelly, Thought Leader
            </Typography>
            <Button className={classes.containedButtonStyle}>
               Start your free trial now
            </Button>
         </Grid>
      </CardMedia>
   );
}

const useStyles = makeStyles({
   root: {
      maxWidth: 345,
   },
   imageBackground: {
      minHeight: '100vh',
      // backgroundImage: 'url(.img/tedtalk/fakeTedTalk.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center left',
   },
   iconButtonStyle: {
      color: '#F2F2F2',
      width: 150,
      height: 150,
      marginTop: '50px',
      borderRadius: '50%',
      border: '2px solid #f2f2f2',
      '&:hover': {
         color: '#D7D7D9',
         border: '2px solid #D7D7D9',
         boxShadow: '0 0 10px #F2F2F2, inset 0 0 10px #F2F2F2',
      },
   },
   videoTitleStyle: {
      textAlign: 'left',
      color: '#F2F2F2',
      marginTop: '30px',
   },
   speakerStyle: {
      textAlign: 'left',
      color: '#F2F2F2',
      marginTop: '10px',
   },
   containedButtonStyle: {
      fontSize: '15px',
      textTransform: 'lowercase',
      fontWeight: '400',
      backgroundColor: '#BF0426',
      color: '#F2F2F2',
      padding: '10px 20px',
      boxShadow: 'none',
      marginTop: '50px',
      '&:hover': {
         backgroundColor: '#D97904',
         boxShadow: 'none',
      },
   },
});

export default Tedtalk;
