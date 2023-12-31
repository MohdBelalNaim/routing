import React from 'react';
import ReactDOM from 'react-dom/client';
import Master from './components/Master';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Features from './components/Features';
import Navbar from './components/Header';
import Footer from './components/Footer';
import About from './components/About'
import Life from './components/Life';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      
      <Navbar/>
      
      <Routes>
      
        <Route path="/" element={ <Master/> } />
        <Route path="/features" element={ <Features/> } />
        <Route path="/about"  element={<About/>} />
        <Route path="/life"  element={<Life/>} />
        
      </Routes>

      <Footer/>
    
    </BrowserRouter>
);

