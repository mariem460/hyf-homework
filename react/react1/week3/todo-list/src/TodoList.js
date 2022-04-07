import React from 'react'
import  {useState, useEffect} from "react";
import TodoItem from './TodoItem';
import "./TodoList.css"
const URL_API = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function TodoList() {
    const [todosState, setTodosState] = useState([]);
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");  
    useEffect(()=> {
        fetch(URL_API)
        .then(res => res.json())
        .then(data => setTodosState(data))
    },[])
    const deleteItem = (idItem) => {
    setTodosState((prev) => prev.filter((todo) => todo.id !== idItem))
  }

  const updateDescription = (id, description) => {
      const updatedDescription = [... todosState].map((todo)=>{
        if (todo.id === id) {
            todo.description = description;
        }
        return todo;
      })
      setTodosState(updatedDescription)

  }

    const handelAddItem = (event) => {
    event.preventDefault();
    const newId = todosState[todosState.length -1].id + 1;
    const newTodo ={id: newId, description, deadline}
    console.log("new todo", newTodo);
    setTodosState((prevState) => {
        return [... prevState, newTodo]
      })
      setDescription("")
      setDeadline("")
}

    const todoItems = todosState.map((todo) => (
    <TodoItem description={todo.description} key ={todo.id} id={todo.id} deadline={todo.deadline} deleteItem = {deleteItem}   updateDescription={updateDescription} >
      </TodoItem>
  ));
    


  return (
    <div>
        <form onSubmit={handelAddItem}>
            <input type="text" placeholder='Description' name='description' value={description} onChange={(e)=> setDescription(e.target.value)}/>
            <input type="date"  name='deadline' value={deadline} onChange={(e)=> setDeadline(e.target.value)}/>
            <button>Add Item</button>
        </form>
         <ul>
             {todoItems}
         </ul>
    </div>
  )
}
export default TodoList;