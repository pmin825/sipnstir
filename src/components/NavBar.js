import { Navbar, Nav, Container } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link from React Router
import "./NavBar.css";
import { ReactComponent as CocktailIcon } from "../assets/images/reshot-icon-cocktail-27YL84MEBV.svg";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <div className="title-container">
          <Navbar.Brand as={Link} to="/">Sip N' Stir</Navbar.Brand> {/* ✅ Fix Home Link */}
          <CocktailIcon className="cocktail-icon" />
        </div>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link> {/* ✅ Corrected */}
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/alcohol-calculator">Alcohol Calculator</Nav.Link>
          </Nav>
          <button type="button" className="btn btn-outline-secondary">
            Request Booking
          </button>
        </Navbar.Collapse>
      </Container>
      <div className="nav-center-text">
        <span>Sip, Stir, Celebrate – We Bring the Bar to You!</span>
      </div>
    </Navbar>
  );
}
