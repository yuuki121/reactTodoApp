import React from 'react'
import "./Task.css"
import { TodosContext } from '../App'
import { Button, ButtonGroup, TextField } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import ListIcon from '@mui/icons-material/List';
import DeleteIcon from '@mui/icons-material/Delete';

function Task(props) {

  const todos = React.useContext(TodosContext);
  const completeTask = () => {
    todos.complete.setcompleteTodo((list) => [...list, { id: props.id, title: props.title, content: props.content }]);
    todos.todo.setTodo((todos) => todos.filter(todos => (todos.id !== props.id)));
    todos.cancel.setcancelTodo((todos) => todos.filter(todos => (todos.id !== props.id)));
  }

  const cancelTask = () => {
    todos.cancel.setcancelTodo((list) => [...list, { id: props.id, title: props.title, content: props.content }]);
    todos.complete.setcompleteTodo((todos) => todos.filter(todos => (todos.id !== props.id)))
    todos.todo.setTodo((todos) => todos.filter(todos => (todos.id !== props.id)));
  }

  const todoTask = () => {
    todos.todo.setTodo((list) => [...list, { id: props.id, title: props.title, content: props.content }]);
    todos.complete.setcompleteTodo((todos) => todos.filter(todos => (todos.id !== props.id)))
    todos.cancel.setcancelTodo((todos) => todos.filter(todos => (todos.id !== props.id)));
  }

  const deleteTask = () => {
    todos.todo.setTodo((todos) => todos.filter(todos => (todos.id !== props.id)));
    todos.complete.setcompleteTodo((todos) => todos.filter(todos => (todos.id !== props.id)))
    todos.cancel.setcancelTodo((todos) => todos.filter(todos => (todos.id !== props.id)));
  }

  return (
    <div className='task'>
      <p id='tasktitle'>{props.title}</p>
      <p id='taskcontent'>{props.content}</p>
      <div id='taskfooter'>
        {props.status !== "todo" && <Button onClick={todoTask}><ListIcon className='material' /></Button>}
        {props.status !== "complete" && <Button onClick={completeTask}><TaskAltIcon className='material' /></Button>}
        {props.status !== "cancel" && <Button onClick={cancelTask}><CancelIcon className='material' /></Button>}
        <Button onClick={deleteTask}><DeleteIcon className='material' /></Button>
      </div>
    </div>
  )
}

export default Task