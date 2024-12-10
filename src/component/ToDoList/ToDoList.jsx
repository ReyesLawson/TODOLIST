import React, { useState } from "react";
import "./ToDoList.css";
import { Button, Form, Container } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap-icons/font/bootstrap-icons.css';



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

  return (
  <>
    <Container className="list-Container">
      <div className="to-do-list">
        <h1>To Do List</h1>

        <Form onSubmit={addToDo} >
          <div className="input-container">
          <input
            type="text"
            placeholder="Need To Do!!!"
            value={toDo}
            onChange={handleTextChange}
          />
          <Button type="submit" className="add-button">
            Add More
          </Button>
          </div>
        </Form>

        <ol className="item-list">
          {toDoList.map((item, index) => (
            <li key={index} className="d-flex flex-row ">
              <span className="text me-auto p-3">{item}</span>
              <div >
              <Button
                className="mark-button button-styles"
                onClick={() => markedCompleted(index)}>
                <i class="bi bi-check-circle-fill fs-2"></i>
              </Button>
             
              <Button
                className="delete-button button-styles"
                onClick={() => handleDelete(index)} >
                  <i class="bi bi-trash fs-2" ></i>
              </Button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  </>
  );
}

