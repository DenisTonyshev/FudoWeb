import React from 'react';
import {  BrowserRouter,
  Routes, // instead of "Switch"
  Route, } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Classes from './Components/Classes';


const App = () => {
     return (
       <BrowserRouter>
         <div className="app-container">
           <NavigationBar />
           <div className="body-container">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
             </Routes>
           </div>
           {/* <Footer /> */}
           </div>
    </BrowserRouter>
  );
};

export default App;
