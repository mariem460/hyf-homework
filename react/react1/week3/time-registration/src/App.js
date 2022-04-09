import './App.css';
import SubmitShift from './SubmitShift';
import ShiftOverview from './ShiftOverview';
import React, { useState, useEffect } from 'react'
const API_URL = " https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw"


function App() {
  const [allUsers, setAllUsers] = useState([])
  useEffect(()=> {
    fetch(API_URL)
    .then(res=> res.json())
    .then(data => setAllUsers(data))
  }, [])
  const addedShifts = (newName, newStart, newEnd) => {
    const newShift =  [... allUsers,{name: newName, start: newStart, end: newEnd}]
    setAllUsers(newShift)
  }
  
  return (
    <div className="App">
      <SubmitShift addedShifts = {addedShifts}/> 
      <div className='shiftsList'>
        <ShiftOverview allUsers={allUsers} />
      </div>
    </div>
  );
}

export default App;
