import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../header/Navbar';
import Accueil from '../pagers/Accueil';
import Contact from '../pagers/Contact';
import Politique from '../pagers/Politique';
import Sport from '../pagers/Sport';
import Voyage from '../pagers/Voyage';

function MyApp() {
    return (
    <div className='contant'>
        
    <Router>
        <Navbar />
        <Routes>
           
            <Route path="/" element={<Accueil /> } />
            <Route path="/politique" element={<Politique /> } />
            <Route path="/contact" element={<Contact /> } />
            <Route path="/sport" element={<Sport /> } />
            <Route path="/voyage" element={<Voyage /> } />
        </Routes>
    </Router>
    </div>
    );
}

export default MyApp;
