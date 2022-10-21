import React from "react";
import "./AppHeader.css";
import { Link } from "react-router-dom";
import icon from "../../assets/music-notes.png";
import { Nav, Navbar, NavItem, NavbarBrand, Container } from "reactstrap";

const AppHeader = () => {
  return (
    <Navbar color="dark" dark>
      <Container className="header">
        <div className="title">
          <NavbarBrand href="/">
            <img src={icon} alt="k-pop" className="k-pop" />
          </NavbarBrand>
          <NavbarBrand>K-Pop On!</NavbarBrand>
        </div>
        <Nav>
          <NavItem>
            <Link to="/add" className="btn btn-primary">
              New Song
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
