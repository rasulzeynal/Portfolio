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
                <NavLink as={Link} to="/" className='nav-link'>
                <AiOutlineHome className='mr-1 mb-1'/>Home</NavLink>
              </NavItem>
              <NavItem >
                <NavLink as={Link} to="/about">
                   <AiOutlineUser className='mr-1 mb-1'/>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink as={Link} to="/projects">
                    <AiOutlineFundProjectionScreen className='mr-1 mb-1'/>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink as={Link} to="/resume">
                <CgFileDocument className='mr-1 mb-1' />Resume</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  export default NavBar;