import React,{ useState } from 'react';
import logo from "../assets/img/male.png";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineFundProjectionScreen,
    AiFillStar
} from "react-icons/ai";
import {CgFileDocument,CgGitFork} from "react-icons/cg"
import { ImBlog } from "react-icons/im";



const NavBar = () => {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" style={{width:"70px"}} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpand(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setExpand(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => setExpand(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => setExpand(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/rasulzeynal/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  export default NavBar;



  /* 
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
  */


        /* 
        <Navbar color="light" light expand="md" fixed='top'>
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Reset
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar> 
        
        */


    /* 
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
    */