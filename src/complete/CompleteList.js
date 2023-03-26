import React from 'react'
import "./CompleteList.css"
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import Task from '../task/Task';
import { TodosContext } from '../App';

function CompleteList() {
  const todos = React.useContext(TodosContext);
  return (
    <div className='completeList'>
      <PlaylistAddCheckIcon />
      {
        todos.complete.completeTodos.map((compTodo) =>
          <Task id = {compTodo.id}  title={compTodo.title} content={compTodo.content} status = "complete" />
        )
      }
    </div>
  )
}

export default CompleteList