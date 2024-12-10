import './App.css';
import React from 'react';
import ToDoList from './component/ToDoList/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavBar from './component/ToDoList/Navbar/Navbar';

 function App(){
    return (
      <div className="App">
        <header className="App-header">
          <><NavBar/></>
        
        </header>
        <main>
          <ToDoList/>
        </main>
      </div>
    );
  }
  
 

export default App;
