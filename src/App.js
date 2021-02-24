import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateTodo from './components/CreateTodo'
import EditTodo from './components/EditTodo'
import TodoList from "./components/TodosList";
import Navbar from "./components/Navbar";

class App extends Component {

  render(){
  return (
    <Router>
        <div className="container">
      <Navbar/>
      <Route path="/" component={TodoList}/>
      <Route path="/edit/:id" component={EditTodo}/>
      <Route path="/create" component={CreateTodo}/>
      </div>
    </Router>
  );
}
}

export default App;
