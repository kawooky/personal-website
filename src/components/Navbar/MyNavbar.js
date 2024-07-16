import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import styles from "./MyNavbar.module.css";

export const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" className="p-4 text-center">
      <Link to="/Home">
        <Navbar.Brand>
          <h2>youssef.kawook</h2>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink className="nav-link" to="/Home">
            Home
          </NavLink>
          <NavLink className="nav-link larger-text" to="/Projects">
            Projects
          </NavLink>
          {/* <NavLink className="nav-link" to="/About">
            About
          </NavLink>
          <NavLink className="nav-link" to="/Menu">
            Menu
          </NavLink>
          <NavLink className="nav-link" to="/Delivery">
            Delivery
          </NavLink>
          <NavLink className="nav-link" to="/FAQ">
            FAQ
          </NavLink>
          <NavLink className="nav-link" to="/Contact">
            Contact
          </NavLink> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
