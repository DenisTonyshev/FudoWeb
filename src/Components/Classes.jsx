import React from 'react';
import Container from '@mui/material/Container';
import Card from './Minor/Card';
import Map from './Minor/GoogleMap';
import Typography from '@mui/material/Typography';

const text = (
  <>
    Fudoshinkan Dojo is a Kendo club located in Hod HaSharon, Green School.
    We practice every Monday and Thursday 7-9pm in the small studio inside the building.
    <br/>
    <br/>

    Beginners are most welcome to join our dojo, location details are in the contact section.
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
      imageLink: "https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/424736230_17890577012982094_666053679106351686_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=rJwM0EcFUe4AX8RMie_&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAv8NTmxU-8SfNCxSyuHIYP3tZu_xRqrpj_fqdhvaZ-RQ&oe=65DEE281",
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
