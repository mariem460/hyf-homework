import React, { useState, useEffect } from 'react'
import "./ShiftOverview.css"
import ShiftInfo from './ShiftInfo'

const API_URL = " https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw"
function ShiftOverview() {
  const [allUsers, setAllUsers] = useState([])
  const [inputValue, setInputValue] = useState("");
  const [searchedUser, setSearchedUser]= useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(()=> {
    fetch(API_URL)
    .then(res=> res.json())
    .then(data => setAllUsers(data))
  }, [])

console.log("inital state", allUsers)

  const handelSearch = ((event) => {
    const entredName = event.target.value
    setInputValue(entredName)
    setClicked(false)
    setSearchedUser([])
  })
  
  const shiftItems =
    searchedUser
        .map((user)=> 
      <ShiftInfo name = {user.name} startDate = {user.start} endDate = {user.end} key= {user.name} >
        </ShiftInfo>)

    const handelClick = () => {
      setClicked(true);
      setSearchedUser(allUsers
        .filter((userInfo)=> userInfo.name.toLowerCase().startsWith(inputValue?.toLowerCase()))
        )}
   
  return (
    <div className= "overview">
      <h1>Shift overview</h1>
      <input type="text" placeholder='User Name' name='userName' value={inputValue.userName} onChange= {handelSearch}/>
      <button onClick={handelClick}>Search</button>
      {clicked && !inputValue ? <div>Please check the name again !</div> : null}
      <ul>
        {shiftItems}
      </ul>
    </div>
  )
}

export default ShiftOverview 