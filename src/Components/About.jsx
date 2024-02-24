import React from 'react';
import Container from '@mui/material/Container';
import SideCard from './Minor/CardBox';
import Card from './Minor/Card';
import Typography from '@mui/material/Typography';
import groupPhoto from '../Assets/GroupPhoto.jpg'
import pasha from '../Assets/Pasha.jpg'

const About = () => {
  
  return (
    <Container maxWidth="md">
      <Card data={{
    header: "Our Dojo:",
    text: `Fudoshinkan Dojo is a community Kendo club located in Hod HaSharon, Green School.
          We practice every Monday and Thursday 7-9pm in the small studio inside the building.`,
    imageLink: groupPhoto,
    index: 0,
    extra: true,
      }} />
      <Typography gutterBottom variant="h5" component="div">
        Who we ARE: 
        </Typography>
      <SideCard data={{
    name: "Pavel Volodarskiy",
    text: `6th dan Kendo, President of Israel Kendo Federation
    Rightful heir to the Iron Throne, Rightful King of the Andals and the First Men, Protector of the Seven Kingdoms, the Father of Dragons, the Khal of the Great Grass Sea, the Unburnt, the Breaker of Chains.`,
    imageLink: pasha,
    index: 0,
    extra: true,
      }} />
    </Container>
  );
};

export default About;
