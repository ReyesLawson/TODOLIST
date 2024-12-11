import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";
import "./Navbar.css";

function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="nav-container">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Contact Us">Contact Us</Nav.Link>
            <Nav.Link onClick={handleShow}>Pick your List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Lists</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ol>
            <div>
              <Button
                type="OnClick"
                className="nav-list-buttons d-flex flex-row fs-4">
                Today
              </Button>

              <Button type="" className="nav-list-buttons d-flex flex-row fs-4">
                Tomorrow
              </Button>

              <Button type="" className="nav-list-buttons d-flex flex-row fs-4">
                Contact Us
              </Button>
            </div>
          </ol>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default NavBar;
