import React from 'react';
import Container from '@mui/material/Container';
import SideCard from './Minor/CardBox';
import Card from './Minor/Card';
import Typography from '@mui/material/Typography';
import groupPhoto from '../Assets/GroupPhoto.jpg'
import pasha from '../Assets/Pasha.jpeg'
import dan from '../Assets/Dan.jpeg'
import roi from '../Assets/Roi.jpeg'

const aboutData = [{
  name: "Pavel Volodarskiy",
  text: `6th Dan Kendo\n
  President of Israel Kendo Federation\n
  Israel national team coach.`,
  imageLink: pasha,
  index: 0,
  extra: true,
  instagramLink: "https://www.instagram.com/samuraipasha/",
  facebookLink: "https://www.facebook.com/pasha.volodarsky"
},
{
  name: "Dan Sherer",
  text: `3rd Dan\n
  Senpai of Fudoshinkan kendo club`,
  imageLink: dan,
  index: 1,
  LSide: true,
  },
  {
    name: "Roi Eidelman",
    text: `3rd Dan\n
    Senpai and instructor at Fudoshinkan kendo club, Israel national team member`,
    imageLink: roi,
    index: 2,
    extra: true,
    instagramLink: "https://www.instagram.com/roi_eidelman/",
    facebookLink: "https://www.facebook.com/roi.eidelman.5",
      }
]

const About = () => {
  return (
    <Container maxWidth="md">
      <Card data={{
    header: "Our Dojo:",
    text: `Fudoshinkan Dojo is a community Kendo club located in Hod HaSharon, Green School.
          We practice every Monday and Thursday 7-9pm in the small studio inside the building.`,
    imageLink: groupPhoto,
    index: 0,
    // extra: true,
      }} />
      <Typography gutterBottom variant="h5" component="div">
        Who we ARE: 
        </Typography>
        {aboutData.map((x) => (
        <SideCard data={ x } key={x.index} index={x.index} />
      ))}
    </Container>
  );
};

export default About;
