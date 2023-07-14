import React from 'react';
import ReactDOM from 'react-dom/client';
import Master from './components/Master';
import {BrowserRouter, Routes, Route,Switch} from 'react-router-dom'
import Features from './components/Features';
import Header from './components/Header';
import Footer from './components/Footer';


//default export
//named export

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
      
        <Route path="/" element={ <Master/> } />
        <Route path="/features" element={ <Features/> } />
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

