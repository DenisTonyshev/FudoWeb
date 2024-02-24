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
import FAQ from './Components/Faq';

const App = () => {
     return (
       <BrowserRouter>
         <div className="app-container">
           <NavigationBar />
           <div className="body-container">
      <Routes>
        <Route path="/fudoweb" exact element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/gallery" element={<Classes />} /> */}
        <Route path="/faq" element={<FAQ />} />
             </Routes>
           </div>
           <Footer />
           </div>
    </BrowserRouter>
  );
};

export default App;
