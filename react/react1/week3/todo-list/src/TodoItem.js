import React, { useState } from 'react'
import "./TodoItem.css"

function TodoItem({description, deleteItem, id, deadline, updateDescription }) {
  const [checked, setChecked] = useState(false);
  const [editing, setEditing] = useState(false);
  const [updatingDescription, setUpdatingDescription] = useState('');

  const changedBox = (event) => {
    setChecked(event.target.checked)
  }
  const isChecked = (itemChecked) =>
   itemChecked ? "checked-item" : "not-checked-item";

  const handelRemove = () => {
    deleteItem(id)
  }
  const handleEdit = () => {
    setEditing(true);
    setUpdatingDescription(description);
};
const handleUpdateDescription = (e) => {
    const value = e.target.value;
    setUpdatingDescription(value);
};
 //update function
const updateDescByNewValue = () => {
        setEditing(false);
        updateDescription(id, updatingDescription);
    };
  return (
    <div className='items-container'>
      <div className='items'>
        <li className={isChecked(checked)}>{description}</li>
        <li>Deadline: {deadline}</li>
        <div className='buttons'>
          <input type="checkbox" onChange={changedBox}></input>
          <button onClick={handelRemove}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
          {editing ? (<input type="text" value={updatingDescription} onChange={handleUpdateDescription}/>) : (null)}
          {editing ? (
                <button onClick={updateDescByNewValue}>Save</button>) : (null)}
        </div>
      </div>
    </div>
  )
}

export default TodoItem;