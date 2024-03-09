import React from 'react';
import {  BrowserRouter,
  Routes, // instead of "Switch"
  Route, } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Classes from './Components/Classes';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import FAQ from './Components/Faq';
import Box from '@mui/material/Box';

const App = () => {
     return (
       <BrowserRouter>
         <div className="app-container">
           <NavigationBar />
          
           <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >       
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} />
             </Routes>
          </Box>
           <Footer />
           </div>
    </BrowserRouter>
  );
};

export default App;
