import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


var des = document.querySelector("#container");

ReactDOM.render(
    <Container fluid>
      <TodoList />
    </Container>,
  des
);
