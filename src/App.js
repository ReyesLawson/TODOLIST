import "./App.css";
import React from "react";
import ToDoList from "./component/ToDoList/ToDoList";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/ToDoList/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "./component/ToDoList/ContactPage/ContactPage";

function App() {
  return (
    
    <Router>
      <div className="App container-fluid app-container">
        <header className="App-header container-fluid d-flex">
          <NavBar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<ToDoList />} />
            <Route path="/contactpage" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
   
  );
}

export default App;
