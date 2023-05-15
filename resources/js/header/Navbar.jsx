import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { FaBars } from 'react-icons/fa'; // add the FaBars icon for the toggler
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import myImage from '../../public/img/logo.png';

// import Bootstrap components

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false); // create a state variable for the Navbar Toggler

  const toggle = () => setIsOpen(!isOpen); // create a toggle function to switch the state

  return (
    <Navbar color="light" light expand="md">
      <div className="container">
        <NavbarBrand href="/">
        <img src={myImage} alt="image..." />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">Accueil</Link>
            </NavItem>
            <NavItem>
              <Link to="/Sport" className="nav-link">Sport</Link>
            </NavItem>
            <NavItem>
              <Link to="/Politique" className="nav-link">Politique</Link>
            </NavItem>
            <NavItem>
              <Link to="/Voyage" className="nav-link">Voyage</Link>
            </NavItem>
            <NavItem>
              <Link to="/Contact" className="nav-link">Contact</Link>
            </NavItem>
            <NavItem>
              <Link to='/login' className="nav-link"><MdAccountCircle/></Link>
            </NavItem>
            <NavItem>
              <Link to='/search' className="nav-link"><AiOutlineSearch/></Link>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}

export default MyNavbar;