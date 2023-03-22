import React, { useRef } from 'react'
import "./SideBar.css"
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Button, TextField } from '@mui/material';
import {TodosContext} from '../App';
import AddBoxIcon from '@mui/icons-material/AddBox';

function SideBar() {
  const title = useRef(null)
  const content = useRef(null)

  const todos = React.useContext(TodosContext);

  const createTodo = () => {
    const newId = todos.count.id+1;
    todos.count.setId(newId);
    todos.todo.setTodo((todo)=>[...todo,{ id:newId, title: title.current.value, content: content.current.value}]);
  }

  return (
    <div className='sideBar'>
       <span className='homeicon'><ListAltIcon /></span>
       <div id='inputform'>
         <TextField fullWidth id="filled-basic" label="title" variant="filled" inputRef={title} />
         <TextField fullWidth id="filled-basic" label="content" variant="filled" inputRef={content} multiline rows={6}/>
         <Button id= "button" onClick={createTodo}><AddBoxIcon /></Button>
       </div>
    </div>
  )
}

export default SideBar