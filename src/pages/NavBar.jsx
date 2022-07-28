import React from 'react';
import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import logo from "../assets/img/male.png";
import {Link} from "react-router-dom";
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineFundProjectionScreen
} from "react-icons/ai";
import {CgFileDocument} from "react-icons/cg"

const NavBar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [navColour, updateNavbar] = useState(false);


    const scrollHandler = () => {
        if (window.scrollY >= 20) {
          updateNavbar(true);
        } else {
          updateNavbar(false);
        }
      }
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    window.addEventListener("scroll", scrollHandler);
    return (
      <div>
        <Navbar  fixed='top'  className={navColour ? "sticky" : "navbar"}  expand="md">
          <NavbarBrand href="/" className='d-flex'><img src={logo} alt="logo" style={{width:"70px"}} /></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} className='collapse' navbar style={{color:"white"}}>
            <Nav className="ml-auto" navbar >
              <NavItem>
                <Link to="/" className='nav-link' style={{cursor:"pointer",color:"white"}}>
                <AiOutlineHome className='mr-1 mb-1'/>Home</Link>
              </NavItem>
              <NavItem >
                <Link to="/about" className='nav-link'  style={{cursor:"pointer",color:"white"}}>
                  <AiOutlineUser className='mr-1 mb-1'/>About</Link>
              </NavItem>
              <NavItem>
                <Link to="/project" className='nav-link' style={{cursor:"pointer",color:"white"}}>
                    <AiOutlineFundProjectionScreen className='mr-1 mb-1'/>Projects</Link>
              </NavItem>
              <NavItem>
                <Link to="/resume" className='nav-link' style={{cursor:"pointer",color:"white"}}>
                <CgFileDocument className='mr-1 mb-1' />Resume</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  export default NavBar;