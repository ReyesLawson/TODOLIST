import React, { useState } from "react";
import "./ContactPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    nameFirst: "",
    nameLast: "",
    email: "",
    address:"",
    city:"",
    state:"",
    zip:"",
    checkbox: false,
    feedback: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Hello, this is the users information!");
    console.log("First Name:", formState.nameFirst);
    console.log("Last Name:", formState.nameLast);
    console.log("Email:", formState.email);
    console.log("Checkbox:", formState.checkbox);
    console.log("Feedback:", formState.feedback);
  };

  return (
    <>
      <Container className="container-fluid">
        <Form>
        <section className="Contact">
          <Form onSubmit={handleSubmit} className="contact-form">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="nameFirst"
                  value={formState.nameFirst}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="nameLast"
                  value={formState.nameLast}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name= "email"
                  placeholder="Enter email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control 
              type="text"
              name= "address"
              placeholder="1234 Main St"
              value={formState.address}
              onChange={handleChange}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                type="text"
                name= "city"
                placeholder="city"
                value={formState.city}
                onChange={handleChange}
                 />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select
                 defaultValue="location"
                  name= "state"
                  value={formState.state}
                  onChange={handleChange}
                  >

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
                <Form.Control 
                type= "text"
                name="zip"
                value={formState.zip}
                onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="Add me to the e-mail list"
                name="checkbox"
                checked={formState.checkbox}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 feedback-container"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your Feedback</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="feedback"
                value={formState.feedback}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </section>
        </Form>
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
