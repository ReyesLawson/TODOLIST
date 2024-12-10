import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";

function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark"className="nav-container">
        <Container >
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
          <ol className="nav-list">
            <>
              <Button type="" className="">
                Today
              </Button>
            </>
            <>
              <Button type="" className="">
                Tomorrow
              </Button>
            </>
            <>
              <Button type="" className="">
                Contact Us
              </Button>
            </>
          </ol>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavBar;
