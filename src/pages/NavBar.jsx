import React from 'react';
import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button} from 'reactstrap';
import logo from "../assets/img/male.png";
import {Link} from "react-router-dom";
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineFundProjectionScreen,
    AiFillStar
} from "react-icons/ai";
import {CgFileDocument,CgGitFork} from "react-icons/cg"

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
        <Navbar fixed='top'  className={navColour ? "sticky" : "navbar"}  expand="md">
          <NavbarBrand href="/" className='d-flex'><img src={logo} alt="logo" style={{width:"70px"}} /></NavbarBrand>
          <NavbarToggler onClick={toggle} >
          <span></span>
          <span></span>
          <span></span>
          </NavbarToggler>
          <Collapse isOpen={isOpen} className='collapse' navbar id="responsive-navbar-nav" >
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className='nav-link'>
                <AiOutlineHome className='mr-1 mb-1'/>Home</Link>
              </NavItem>
              <NavItem >
                <Link to="/about" className='nav-link' >
                  <AiOutlineUser className='mr-1 mb-1'/>About</Link>
              </NavItem>
              <NavItem>
                <Link to="/project" className='nav-link' >
                    <AiOutlineFundProjectionScreen className='mr-1 mb-1'/>Projects</Link>
              </NavItem>
              <NavItem>
                <Link to="/resume" className='nav-link' >
                <CgFileDocument className='mr-1 mb-1' />Resume</Link>
              </NavItem>
              <NavItem className="fork-btn nav-item">
              <Button
                href="https://github.com/rasulzeynal/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
  export default NavBar;