import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({ data={} }) {
    // Destructure the object within the component
    const { header, text, imageLink, extra=false, heigt=240 } = data;
  return (
      <Card sx={{ marginBottom: '10px' }}>
      <CardMedia
              component="img"
              alt="Kendo"
              height={heigt}
              image={ imageLink }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {header}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
         {text}
        </Typography>
          </CardContent>
          {extra && (  // Conditionally render CardActions if extra is true
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
            </CardActions>
        )}
      
      </Card>
    );
}
