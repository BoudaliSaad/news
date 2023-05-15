import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route,Navigate,useLocation } from "react-router-dom";
import Header from '../header/Navbar';
import Accueil from '../pagers/Accueil';
import Contact from '../pagers/Contact';
import Politique from '../pagers/Politique';
import Sport from '../pagers/Sport';
import Voyage from '../pagers/Voyage';
import Footer from '../accueil_stick/Footer';
import Login from '../pagers/Login';
import Search from '../pagers/Search';
import Notfound from '../pagers/Notfound';
function MyApp() {
   const location=useLocation();
    return (
    <div className='contant'>
            
   
        <Header/>
     
        <Routes>
           
            <Route path="/"  element={<Accueil /> } />
            <Route path="/politique" element={<Politique /> } />
            <Route path="/contact" element={<Contact /> } />
            <Route path="/sport" element={<Sport /> } />
            <Route path="/voyage" element={<Voyage /> } />
            <Route path="/login" element={<Login /> } />
            <Route path="/search" element={<Search/> } />
            <Route path="/404" element={<Notfound/>} />
            <Route path="*" element={<Navigate to="/404" />} />

        </Routes>
        {location.pathname !== '/404' && <Footer />}
    


    
   
    </div>
    );
}

export default MyApp;
