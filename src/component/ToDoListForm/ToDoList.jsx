import React, { useState } from "react";
import "./ToDoList.css";
import { Button, Form, Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ToDoList() {
  const [state, setState] = useState({
    toDoList: [
      { text: "Workout", completed: false },
      { text: "Go To The Grocery Store", completed: false },
      { text: "Get Gas Before Work", completed: false },
      { text: "Learn React", completed: false },
      { text: "Practice Coding", completed: false },
    ],
    toDo: "",
    showIncomplete: false,
  });

  function handleTextChange(event) {
    setState((prevState) => ({
      ...prevState,
      toDo: event.target.value,
    }));
  }

  const addToDo = (e) => {
    e.preventDefault();
    setState((prevState) => {
      const updatedList = [
        ...prevState.toDoList,
        { text: prevState.toDo, completed: false },
      ];
      console.log(updatedList);
      return {
        ...prevState,
        toDoList: updatedList,
        toDo: "",
      };
    });
  };
  const incomplete = (e) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      showIncomplete: !prevState.showIncomplete,
    }));
  };
  const handleDelete = (index) => {
    setState((prevState) => ({
      ...prevState,
      toDoList: prevState.toDoList.filter((item, i) => i !== index),
    }));
  };

  const markedCompleted = (index) => {
    setState((prevState) => ({
      ...prevState,
      toDoList: prevState.toDoList.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      ),
    }));
  };
  const filteredList = state.showIncomplete
    ? state.toDoList.filter((item) => !item.completed)
    : state.toDoList;

  return (
    <>
      <Container className="container-fluid list-Container">
        <div className="to-do-list">
          <h1>To Do List !</h1>

          <Form onSubmit={addToDo}>
            <div className="input-container">
              <input
                className="input-box"
                type="text"
                placeholder="What do I need to Do?"
                value={state.toDo}
                onChange={handleTextChange}
              />
              <div>
                <Button type="submit" className="add-button">
                  Add To List
                </Button>
                <Button
                  type="submit"
                  className="need-todo-button"
                  onClick={incomplete}>
                  {state.showIncomplete ? "Show All" : " Show Incomplete"}
                </Button>
              </div>
            </div>
          </Form>

          <ol
            className={`${
              filteredList.length === 0 ? "d-none" : ""
            } item-list`}>
            {filteredList.map((item, index) => (
              <li
                key={index}
                className={`d-flex flex-row ${
                  item.completed ? "completed" : ""
                } ${filteredList.length - 1 === index ? "" : "items-border"}`}>
                <span className="text me-auto p-3">{item.text}</span>
                <div>
                  <Button
                    className="mark-button button-styles"
                    onClick={() => markedCompleted(index)}>
                    <i className="bi bi-check-circle-fill fs-2"></i>
                  </Button>

                  <Button
                    className="delete-button button-styles"
                    onClick={() => handleDelete(index)}>
                    <i className="bi bi-trash fs-2"></i>
                  </Button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
      <footer className="footer container-fluid">
        <div className="row">
          <div className="col-sm-2">&copy;GetEr Done</div>
          <div className="col-sm-7">
            <div className="social_media">
              <a
                href="mailto:reyeslawson89@gmail.com"
                className="bi bi-envelope pe-2"></a>
              <a
                href="https://www.facebook.com/"
                className="bi bi-facebook pe-2"></a>
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
}
