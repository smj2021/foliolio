import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';


// BrowserRouter is necessary in order to use HashLink component for scrolling
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <About />
      </>
    </BrowserRouter>
  );
}

export default App;
