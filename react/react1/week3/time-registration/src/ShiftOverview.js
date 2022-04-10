import React, { useState} from 'react'
import "./ShiftOverview.css"
import ShiftInfo from './ShiftInfo'

function ShiftOverview({allUsers}) {
  const [inputValue, setInputValue] = useState("");
  const [searchedUser, setSearchedUser]= useState([]);
  const [clicked, setClicked] = useState(false);
  const handelSearch = ((event) => {
    const entredName = event.target.value
    setInputValue(entredName)
    setClicked(false)
    setSearchedUser([])
  })
 
  const shiftItems =
    searchedUser
        .map((user)=> 
      <ShiftInfo name = {user.name} startDate = {user.start} endDate = {user.end} key= {user.name} ></ShiftInfo>)
    const handelClick = () => {
      setClicked(true);
      
      setSearchedUser(allUsers
        .filter((userInfo) => {
          return inputValue && userInfo.name.toLowerCase().startsWith(inputValue.toLowerCase())
        }))}
   
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