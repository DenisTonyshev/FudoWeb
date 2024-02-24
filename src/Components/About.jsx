import React from 'react';
import Container from '@mui/material/Container';
import SideCard from './Minor/CardBox';
import Card from './Minor/Card';
import Typography from '@mui/material/Typography';
import groupPhoto from '../Assets/GroupPhoto.jpg'
import pasha from '../Assets/Pasha.jpg'
const aboutData = [{
  name: "Pavel Volodarskiy",
  text: `6th Dan Kendo, President of Israel Kendo Federation
  Rightful heir to the Iron Throne, Rightful King of the Andals and the First Men, Protector of the Seven Kingdoms, the Father of Dragons, the Khal of the Great Grass Sea, the Unburnt, the Breaker of Chains.`,
  imageLink: pasha,
  index: 0,
  extra: true,
  instagramLink: "",
  facebookLink: "https://www.facebook.com/pasha.volodarsky"
},
{
  name: "Dan Sherer",
  text: `4th Dan Kendo, Kendoka with Expirience, Can easyly annihilate the elephant with 1 Man strike`,
  imageLink: "https://cdn.pixabay.com/photo/2020/03/04/06/29/kendo-4900665_1280.png",
  index: 1,
  LSide: true,
  },
  {
    name: "Roi Eidelman",
    text: `3rd Dan Kendo, Kendoka with Expirience best of the best, star wars Yoda trainer, has force, not married.`,
    imageLink: "https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/412371464_930693315252168_8624497655444314937_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=nmxkxpd5NEcAX-TD6Pp&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfDmT8eW9O91lHoaS7y9ABM0tOXVVM8JyTo4wqxZoiuE_w&oe=65DF69DD",
    index: 2,
    extra: true,
    instagramLink: "",
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
    extra: true,
      }} />
      <Typography gutterBottom variant="h5" component="div">
        Who we ARE: 
        </Typography>
        {aboutData.map((x) => (
        <SideCard data={ x } key={x.index} />
      ))}
    </Container>
  );
};

export default About;
