import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function SideCard({ data, index }) { 
    const { name, text, imageLink, extra = false, LSide = false, facebookLink='', instagramLink='' } = data;

    const handleClick = (url) => {    
        window.open(url, '_blank');
    };

    // Define background color for even-indexed cards
    const backgroundColor = index % 2 === 0 ? '#f0f0f0' : 'transparent';

    return (
        <Card sx={{ display: 'flex', marginBottom: '10px', backgroundColor: backgroundColor }}>
            {LSide && (
                <CardMedia
                    component="img"
                    sx={{ width: 151, marginRight: 'auto' }}
                    image={imageLink}
                    alt="Live from space album cover"
                />
            )}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        { name }
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div"  sx={{ whiteSpace: 'pre-line' }}>
                        { text }
                    </Typography>
                </CardContent>
                {extra && (
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="Instagram" onClick={() => handleClick(instagramLink)} >
                            <InstagramIcon />
                        </IconButton>
                        <IconButton aria-label="Facebook" onClick={() => handleClick(facebookLink)}>
                            <FacebookIcon />
                        </IconButton>
                    </Box>
                )}
            </Box>
            {!LSide && (
                <CardMedia
                    component="img"
                    sx={{ width: 151, marginLeft: 'auto' }}
                    image={imageLink}
                    alt="Kendo Photo"
                />
            )}
        </Card>
    );
}
