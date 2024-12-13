import "./App.css";
import React from "react";
import ToDoList from "./component/ToDoListForm/ToDoList";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "./component/ContactPage/ContactPage";
import ToDaysList from "./component/TodaysList/ToDaysList";

function App() {
  return (
    
    <Router>
      <div className="App container-fluid app-container">
        <header className="App-header container-fluid">
          <NavBar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<ToDoList />} />
            <Route path="/contactpage" element={<ContactPage />} />
            <Route path="/todayslist" element={<ToDaysList />} />
          </Routes>
        </main>
      </div>
    </Router>
   
  );
}

export default App;
