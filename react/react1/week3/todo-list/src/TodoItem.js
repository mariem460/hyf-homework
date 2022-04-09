import React, { useState } from 'react'
import "./TodoItem.css"

function TodoItem({description, deleteItem, id, deadline, updateDescription, updateDeadline }) {
  const [checked, setChecked] = useState(false);
  const [editing, setEditing] = useState(false);
  const [updatingDescription, setUpdatingDescription] = useState('');
  const [updatingDeadline, setUpdatingDeadline] = useState('');

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
    setUpdatingDeadline(deadline);
};
const handleUpdateDescription = (e) => {
    const value = e.target.value;
    setUpdatingDescription(value);
};

const handleUpdateDeadline = (e) => {
  const value = e.target.value;
  setUpdatingDeadline(value);
}
 //update function
const updateDescByNewValue = () => {
        setEditing(false);
        updateDescription(id, updatingDescription);
        updateDeadline(id, updatingDeadline)
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
          {editing ? (<div><input type="text" value={updatingDescription} onChange={handleUpdateDescription}/></div>) : (null)}
          <br></br>
          {editing ? (<div><input type="date" value={updatingDeadline} onChange={handleUpdateDeadline}/></div>) : (null)}
          <br></br>
          {editing ? (<button onClick={updateDescByNewValue}>Save</button>) : (null)}
        </div>
      </div>
    </div>
  )
}

export default TodoItem;