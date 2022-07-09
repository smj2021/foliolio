import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';


// BrowserRouter is necessary in order to use HashLink component for scrolling
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
      </>
    </BrowserRouter>
  );
}

export default App;
