import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from './components/CreateTodo'
import EditTodo from './components/EditTodo'
import TodoList from "./components/TodosList";

class App extends Component {

  render(){
  return (
    <Router>
      <Route path="/" component={TodoList}/>
      <Route path="/edit/:id" component={EditTodo}/>
      <Route path="/create" component={CreateTodo}/>
    </Router>
  );
}
}

export default App;
