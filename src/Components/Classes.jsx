import React from 'react';
import Container from '@mui/material/Container';
import Card from './Minor/Card';
import Map from './Minor/GoogleMap';
import Typography from '@mui/material/Typography';
import classes from '../Assets/Classes.jpeg'


const text = (
  <>
    Fudoshinkan Dojo is a Kendo club located in Hod HaSharon, Green School.
    We practice every Monday and Thursday 7-9pm in the small studio inside the building.
    <br/>
    <br/>

    Beginners are most welcome to join our dojo, location details are in the section below.
    <br/>
    <br/>
    <Typography gutterBottom variant="h5" component="div" sx={{color: 'black'}}>
    All equipment needed to practice kendo is provided.
    </Typography>
    <br/>

    The first session of practice is always free, and if you like you can watch us practice before joining the dojo.
    <br/>
    <br/>
    There is onsite car parking available and men’s and women’s changing rooms.
    <br/>
    <br/>
    We recommend coming 5-10 minutes earlier to allow time to get changed.
    <br/>
    <br/>
    Just make sure you wear clothes you can do sport in. We train barefoot in the dojo.
  </>
);

const Classes = () => {
  return (
    <Container maxWidth="md">
      <Card data={{
      header: "Training session and fees:",
      text: text,
      imageLink: classes,
      heigt: 340,
      index: 0,
      }} />
      <Typography gutterBottom variant="h5" component="div" sx={{color: 'black'}}>
        We located:
      </Typography>
      <Map/>
    </Container>
  );
};

export default Classes;
