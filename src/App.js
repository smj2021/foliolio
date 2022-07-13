import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

// BrowserRouter is necessary in order to use HashLink component for scrolling
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <About />
        <Contact />
      </>
    </BrowserRouter>
  );
}

export default App;
