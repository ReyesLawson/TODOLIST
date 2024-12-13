import React, { useState } from "react";
import "./ContactPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const ContactPage = () => {
  const [nameFirst, setNameFirst] = useState("");
  const [nameLast, setNameLast] = useState("");
  const [email, setEmail] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  const [feedback, setFeedBack] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hello");
    console.log("First Name:", nameFirst);
    console.log("Last Name:", nameLast);
    console.log("Email:", email);
    console.log("Checkbox:", checkbox);
    console.log("Feedback:", feedback);
  };
 
  return (
    <>
    <Container className="container-fluid">
      <section className="Contact">
        <Form onSubmit ={handleSubmit} className="contact-form">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="nameFirst"
                placeholder="First Name"
                value={nameFirst}
                onChange={(e) => setNameFirst(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="nameLast"
                placeholder="Last Name"
                value={nameLast}
                onChange={(e) => setNameLast(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="location">
                <option>Choose...</option>
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>California</option>
                <option>Colorado</option>
                <option>Connecticut</option>
                <option>Delaware</option>
                <option>Florida</option>
                <option>Georgia</option>
                <option>Hawaii</option>
                <option>Idaho</option>
                <option>Illinois</option>
                <option>Indiana</option>
                <option>Iowa</option>
                <option>Kansas</option>
                <option>Kentucky</option>
                <option>Louisiana</option>
                <option>Maine</option>
                <option>Maryland</option>
                <option>Massachusetts</option>
                <option>Michigan</option>
                <option>Minnesota</option>
                <option>Mississippi</option>
                <option>Missouri</option>
                <option>Montana</option>
                <option>Nebraska</option>
                <option>Nevada</option>
                <option>New Hampshire</option>
                <option>New Jersey</option>
                <option>New Mexico</option>
                <option>New York</option>
                <option>North Carolina</option>
                <option>North Dakota</option>
                <option>Ohio</option>
                <option>Oklahoma</option>
                <option>Oregon</option>
                <option>Pennsylvania</option>
                <option>Rhode Island</option>
                <option>South Carolina</option>
                <option>South Dakota</option>
                <option>Tennessee</option>
                <option>Texas</option>
                <option>Utah</option>
                <option>Vermont</option>
                <option>Virginia</option>
                <option>Washington</option>
                <option>West Virginia</option>
                <option>Wisconsin</option>
                <option>Wyoming</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Add me to the e-mail list"
              checked={checkbox}
              onChange={(e) => setCheckBox(e.target.checked)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 feedback-container"
            controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Feedback</Form.Label>
            <Form.Control
              type="feedback"
              as="textarea"
              rows={3}
              value={feedback}
              onChange={(e) => setFeedBack(e.target.value)}
            />
          </Form.Group>

          <Button variant= "primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </section>
      </Container>
      <footer className="footer container-fluid">
        <div className="row">
          <div className="col-sm-2">&copy;GetEr Done</div>
          <div className="col-sm-7">
            <div className="social_media">
              <a
                href="mailto:reyeslawson89@gmail.com"
                className="bi bi-envelope"></a>
              <a
                href="https://www.facebook.com/"
                className="bi bi-facebook"></a>
              <a
                href="https://www.messenger.com/login/?next=https%3A%2F%2Fwww.messenger.com%2F"
                className="bi bi-messenger"></a>
            </div>
          </div>
          <div className="col-sm-3">222 To Do, building 2</div>
        </div>
      </footer>
    </>
  );
};

export default ContactPage;
