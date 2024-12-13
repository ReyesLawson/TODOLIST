import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";



function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="nav-container container-fluid">
      <Navbar className="container-fluid">
        <Container>
          <Navbar.Brand href="#home"><i className="bi bi-alarm"></i></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavLink to="/contactpage" className="nav-link">Contact Us</NavLink>
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
                className="nav-list-buttons d-flex flex-row fs-4 offcanvas-buttons">
                <NavLink to="/todayslist" className="nav-link">Today</NavLink>
                
              </Button>

              <Button type="" className="nav-list-buttons d-flex flex-row fs-4 offcanvas-buttons">
              <NavLink to="/todayslist" className="nav-link">Tomorrow</NavLink>
              </Button>

            </div>
          </ol>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default NavBar;
