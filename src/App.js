import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

// BrowserRouter is necessary in order to use HashLink component for scrolling
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
