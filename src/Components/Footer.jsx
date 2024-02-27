import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import { Link } from 'react-router-dom';


export default function LabelBottomNavigation() {
  const [value] = React.useState('recents');

  return (
    <BottomNavigation value={value} sx={{ marginTop: '10px' , backgroundColor: 'black' }}>
      <BottomNavigationAction
        label="Home Page"
        icon={<HomeIcon sx={{ color: "white" }} />}
        component={ Link } to="/"
      />
      <BottomNavigationAction
        label="Favorites"
        icon={<CollectionsIcon sx={{ color: "white" }} />}
        component={ Link } to="/gallery"
      />
    </BottomNavigation>
  );
}