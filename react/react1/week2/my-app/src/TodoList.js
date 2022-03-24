import React from 'react'
import  {useState, useEffect} from "react";
import TodoItem from './TodoItem';
import "./TodoList.css"

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

function TodoList() {
  const [todosState, setTodosState] = useState(todos);
  const newId = todosState[todosState.length -1].id + 1;
  const addNewItem = () => {
    const newTodo = { description: "new item added", id:(newId)} ;
    setTodosState((prevState) => {
      return [... prevState, newTodo]
    })
  }

  const deleteItem = (idItem) => {
    setTodosState((prev) => prev.filter((todo) => todo.id !== idItem))
  }
  
  const todoItems = todosState.map((todo) => (
    <TodoItem description={todo.description} key ={todo.id} id={todo.id} deleteItem = {deleteItem} >
      </TodoItem>
  ));
  
  return (
    <div>
         <button onClick={addNewItem} className="button" >Add new item</button>
         <ul>
         {todoItems}
         </ul>
    </div>
   
  )
}
export default TodoList;
