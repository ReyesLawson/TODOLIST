import React, { useState } from "react";
import "./ToDoList.css";
import { Button, Form, Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ToDoList() {
  const [toDoList, setToDoList] = useState([
    { text: "Workout", completed: false },
    { text: "Go To The Grocery Store", completed: false },
    { text: "Get Gas Before Work", completed: false },
    { text: "Learn React", completed: false },
    { text: "Practice Coding", completed: false },
  ]);
  const [toDo, setToDo] = useState("");

  function handleTextChange(event) {
    setToDo(event.target.value);
  }

  const addToDo = (e) => {
    e.preventDefault();
    setToDoList((prev) => [...prev, { text: toDo, completed: false }]);
    setToDo("");
  };

  const handleDelete = (index) => {
    setToDoList((prev) => prev.filter((item, i) => i !== index));
  };

  const markedCompleted = (index) => {
    setToDoList((prevList) =>
      prevList.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <>
      <Container className="list-Container">
        <div className="to-do-list">
          <h1>To Do List !</h1>

          <Form onSubmit={addToDo}>
            <div className="input-container">
              <input
                className="input-box"
                type="text"
                placeholder="What do I need to Do?"
                value={toDo}
                onChange={handleTextChange}
              />
              <Button type="submit" className="add-button">
                Add To List
              </Button>
            </div>
          </Form>

          <ol className={`${toDoList.length === 0 ? "d-none" : ""} item-list`}>
            {toDoList.map((item, index) => (
              <li
                key={index}
                className={`d-flex flex-row ${
                  item.completed ? "completed" : ""
                }`}>
                <span className="text me-auto p-3">{item.text}</span>
                <div>
                  <Button
                    className="mark-button button-styles"
                    onClick={() => markedCompleted(index)}>
                    <i class="bi bi-check-circle-fill fs-2"></i>
                  </Button>

                  <Button
                    className="delete-button button-styles"
                    onClick={() => handleDelete(index)}>
                    <i class="bi bi-trash fs-2"></i>
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
