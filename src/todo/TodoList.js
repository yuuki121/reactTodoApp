import React from 'react'
import Task from '../task/Task'
import "./TodoList.css"
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import {TodosContext} from '../App'

function TodoList() {
  const todos = React.useContext(TodosContext);

  return (
    <div className='todoList'>
      <FormatListNumberedIcon />
        {todos.todo.todos.map((todo)=>
          <Task id = {todo.id} title = {todo.title} content = {todo.content} status = "todo" />
        )}
    </div>
  )
}

export default TodoList