import React, { useState } from "react";
import "./ToDoList.css";
import { Button, Form, Container } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';


export default function ToDoList() {
  const [toDoList, setToDoList] = useState([
    
      <ListGroup.Item> Workout </ListGroup.Item>,
      <ListGroup.Item>Go To The Grocery Store</ListGroup.Item>,
      <ListGroup.Item>Get Gas Before Work</ListGroup.Item>,
      <ListGroup.Item>Learn React</ListGroup.Item>,
      <ListGroup.Item>Practice Coding</ListGroup.Item>,
    
    
  ]);
  const [toDo, setToDo] = useState("");

  function handleTextChange(event) {
    setToDo(event.target.value);
  }
 
  const addToDo = (e) => {
    e.preventDefault();
    setToDoList((prev) => [...prev, toDo]);
    setToDo("");
  };

  const handleDelete = (index) => {
    setToDoList((prev) => prev.filter((item,i)=> i !== index));
  };

  const markedCompleted = (index) => {
    setToDoList((prev) => prev)
  };

  const notCompleteYet = (index) => {};

 const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  return (
    
      <>
        <Button variant="primary" onClick={handleShow}>

           {/* // make a hamburger button */}
          Fast Links
          
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ol className="nav-list">
            <>
            <Button type="" className="" >Today</Button>
            </>
            <>    
            <Button type="" className="" >Tomorrow</Button>
            </>
            <>
            <Button type="" className="" >Contact Us</Button>
            </>
            </ol>
          </Offcanvas.Body>
        </Offcanvas>
      
  
    <Container className="list-Container">
      <div className="to-do-list">
        <h1>To Do List</h1>

        <Form onSubmit={addToDo}>
          <input
            type="text"
            placeholder="Need To Do!!!"
            value={toDo}
            onChange={handleTextChange}
          />
          <Button type="submit" className="add-button">
            Add More
          </Button>
        </Form>

        <ol>
          {toDoList.map((item, index) => (
            <li key={index}>
              <span className="text">{item}</span>
              <Button
                className="mark-button button-styles"
                onClick={() => markedCompleted(index)}>
                  {/* //add a check mark icon and to display check  */}
                Complete
              </Button>
              <Button
                className="incomplete button-styles"
                onClick={() => notCompleteYet(index)}>
                Incomplete
              </Button>
              <Button
                className="delete-button button-styles"
                onClick={() => handleDelete(index)}>
                  {/* //add a trashcan icon */}
                Delete
              </Button>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  </>
  );
}

