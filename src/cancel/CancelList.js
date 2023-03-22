import React from 'react'
import "./CancelList.css"
import BlockIcon from '@mui/icons-material/Block';
import { TodosContext } from '../App'
import Task from '../task/Task';

function CancelList() {
    const todos = React.useContext(TodosContext);
    return (
        <div className='cancelList'>
            <BlockIcon />
            {
                todos.cancel.cancelTodos.map((cancelTodo) =>
                    <Task id = {cancelTodo.id} title={cancelTodo.title} content={cancelTodo.content} status = "cancel" />
                )
            }
        </div>
    )
}

export default CancelList