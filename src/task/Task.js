import React, { useRef } from 'react'
import "./Task.css"
import { TodosContext } from '../App'
import { Button, TextField } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import ListIcon from '@mui/icons-material/List';
import DeleteIcon from '@mui/icons-material/Delete';

function Task(props) {

  const todos = React.useContext(TodosContext);
  const title = useRef(null)
  const content = useRef(null)

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

  const editTask = () => {
    props.status === "todo" && (todos.todo.setTodo(
      (todos) => todos.map(
        (todo, index) => todo.id === props.id && { id: props.id, title: title.current.value, content: content.current.value })
    ));

    props.status === "complete" && (todos.complete.setcompleteTodo(
      (todos) => todos.map(
        (todo, index) => todo.id === props.id && { id: props.id, title: title.current.value, content: content.current.value })
    ));

    props.status === "cancel" && (todos.cancel.setcancelTodo(
      (todos) => todos.map(
        (todo, index) => todo.id === props.id && { id: props.id, title: title.current.value, content: content.current.value })
    ));
  }

  return (
    <div className='task'>
      <TextField fullWidth id="tasktitle" label="title" variant="filled" inputRef={title}  defaultValue={props.title} onBlur = {editTask} />
      <TextField fullWidth id="taskcontent" label="content" variant="filled" inputRef={content} multiline rows={6} defaultValue={props.content} onBlur = {editTask}/>
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