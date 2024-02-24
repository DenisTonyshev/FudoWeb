import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import FolderIcon from '@mui/icons-material/Folder';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function SideCard({ data }) {
  const theme = useTheme();
  const { name, text, imageLink, extra=false, LSide = false } = data;
  return (
      <Card sx={{ display: 'flex',  marginBottom: '10px' }}>
          {LSide && (
              <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={imageLink}
                  alt="Live from space album cover"
              />)}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
                      { name }
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
                      { text }
          </Typography>
              </CardContent>
              {extra && (
                  <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                      <IconButton aria-label="Instagramm">
                          <InstagramIcon />
                      </IconButton>
                      <IconButton aria-label="Facebook">
                          <FacebookIcon />
                      </IconButton>
                  </Box>)}
          </Box>
          {!LSide && (
              <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={imageLink}
                  alt="Live from space album cover"
              />)}
    </Card>
  );
}