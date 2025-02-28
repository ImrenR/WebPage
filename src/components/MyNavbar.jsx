import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from "../img/logo.png";


const MyNavbar = () => {
  return (
    <Navbar expand="lg"
    style={{ backgroundColor: "#FFFBEC"}}>
      <Container>
        <Link to="/">
          <img src={logo} 
          width='250px'
          alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
            <NavLink
              style={({ isActive }) => ({
                fontSize: isActive && "50px",
              })}
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive && "red",
              })}
              className="nav-link"
              to="/teacher"
            >
              Teacher
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                border: isActive && "2px solid blue",
              })}
              className="nav-link"
              to="/courses"
            >
              Courses
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                backgroundColor: isActive && "aqua",
              })}
              className="nav-link"
              to="/contact"
            >
              Contact
            </NavLink>

            <NavLink
              style={({ isActive }) => ({
                backgroundColor: isActive && "aqua",
              })}
              className="nav-link"
              to="/paths"
            >
            Path
            </NavLink>
            <a
              className="nav-link"
              href="https://github.com/clarusway"
              target="blank"
            >
              Github
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;