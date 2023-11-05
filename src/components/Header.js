import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary navigbar ">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="Restaurant.png"
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="logo for nav"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-to">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/order">Order</Nav.Link>
              <Nav.Link href="/reservation">Reservation</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="buttoncontainer">
            <Button className="Buttonsign" onClick={handleSignIn} type="submit">
              SignIn
            </Button>
            <Button className="Buttonlogin" onClick={handleLogin} type="submit">
              LoginIn
            </Button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
