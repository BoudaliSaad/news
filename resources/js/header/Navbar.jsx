import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';

function Navbar() {
  return (
    <nav style={{background:'#DEDEDE'}}>
      <div  className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <ul className="as">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/Sport">Sport</Link></li>
        <li><Link to="/Politique">Politique</Link></li>
        <li><Link to="/Voyage">Voyage</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
      <div className="icons">
        <a>
          <MdAccountCircle/>
        </a>
        <a>
          <AiOutlineSearch/>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
