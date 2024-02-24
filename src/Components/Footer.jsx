import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import NavigationIcon from '@mui/icons-material/NavigationSharp';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');


  return (
    <BottomNavigation value={value} sx={{ marginTop: '10px' , backgroundColor: 'black' }}>
      <BottomNavigationAction
        label="Home Page"
        icon={<HomeIcon sx={{ color: "white" }} />}
        component={ Link } to="/fudoweb"
      />
      <BottomNavigationAction
        label="Favorites"
        icon={<FavoriteIcon sx={{color:"white"}}/>}
      />
      <BottomNavigationAction
        label="Nearby"
        icon={<LocationOnIcon sx={{color:"white"}}/>}
      />
      <BottomNavigationAction
        label="Navigation"
        icon={<NavigationIcon sx={{ color: "white" }} />}
      />
    </BottomNavigation>
  );
}