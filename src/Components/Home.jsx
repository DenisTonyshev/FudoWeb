import React from 'react';
import NavigationBar from './NavigationBar';
import Button from '@mui/material/Button';

const Home = () => {
  // Define your buttons here
  const buttons = [
    <Button key="button1" color="inherit">Button 1</Button>,
    <Button key="button2" color="inherit">Button 2</Button>
    // Add more buttons as needed
  ];

  return (
    <div>
      <NavigationBar buttons={buttons} />
      {/* Other content of your Home component */}
    </div>
  );
};

export default Home;
