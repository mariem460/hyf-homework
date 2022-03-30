import React from 'react'


function ShiftInfo({name, startDate, endDate }) {


  return (
    <div> 
     
        <li>UserName: {name}</li>
        <li>StartDate: {startDate}</li>
        <li>EndDate: {endDate}</li>
   
           
    </div>
  )
}

export default ShiftInfo