import './App.css';
import TodoList from './todo/TodoList';
import CompleteList from './complete/CompleteList';
import SideBar from './sidebar/SideBar';
import React, { useEffect, useState } from 'react';
import CancelList from './cancel/CancelList';

export const TodosContext = React.createContext([]);

function App() {
  /*
      { title: "title1", content: "content1" },
    { title: "title2", content: "content2" }
  */

  const [todos, setTodo] = useState([]);

  const [completeTodos, setcompleteTodo] = useState([]);

  const [cancelTodos, setcancelTodo] = useState([]);

  const [id, setId] = useState(0);

  const todolist = {
    "count": { id, setId },
    "todo": { todos, setTodo },
    "complete": { completeTodos, setcompleteTodo },
    "cancel": { cancelTodos, setcancelTodo }
  };

  useEffect(() => {
    console.log("----todos-----")
    console.log(todos)
  }, [todos]);

  useEffect(() => {
    console.log("----completeTodos-----")
    console.log(completeTodos)
  }, [completeTodos]);

  return (
    <div className="App">
      <TodosContext.Provider value={todolist} >
        <SideBar />
        <TodoList />
        <CompleteList />
        <CancelList />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
