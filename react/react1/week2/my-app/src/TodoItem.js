import React, { useState } from 'react'
import "./TodoItem.css"

function TodoItem({description, deleteItem, id }) {
  const [checked, setChecked] = useState(false);
  const changedBox = (event) => {
    setChecked(event.target.checked)
  }
  const isChecked = (itemChecked) =>
   itemChecked ? "checked-item" : "not-checked-item";

  const handelRemove = () => {
    deleteItem(id)
  }
  return (
    <div className='items-container'>
      <div className='items'>
        <li className={isChecked(checked)}>{description}</li>
        <div className='buttons'>
          <input type="checkbox" onChange={changedBox}></input>
          <button onClick={handelRemove}>Delete</button>
        </div>

      </div>
       
       
        
    </div>
  )
}

export default TodoItem;