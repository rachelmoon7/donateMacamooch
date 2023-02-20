import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './containers/Header.jsx';
import Body from './containers/Body.jsx';
import Footer from './containers/Footer.jsx';


const App = () => {
  return (
    // <>
    <BrowserRouter >
      <Header />
      <Body />
      <Footer />
    </BrowserRouter>
    
    // </>
  );
}

export default App;
