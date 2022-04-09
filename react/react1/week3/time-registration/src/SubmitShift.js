import React from 'react'
import "./SubmitShift.css"
import { useState } from 'react';

const SubmitShift = ({addedShifts}) => {
    const [values, setValues] = useState({
        userName : "",
        startDate : "",
        endDate : ""
    })
    const [submited, setSubmit] = useState(false);
      
    const handelUserNameChange = (event) => {
        setValues({...values, userName: event.target.value})
    }
    const handelStartDateChange = (event) => {
        setValues({...values, startDate: event.target.value})
    }
    const handelEndDateChange = (event) => {
        setValues({...values, endDate: event.target.value})
    }
    const handelSubmit = (event) => {
        event.preventDefault();
        setSubmit(true);
        addedShifts(values.userName, values.startDate, values.endDate)
      
  
    }
 
    return (
        <div className='formInput'>
            <h1>Time Registration </h1>
            <form className='registration-form'onSubmit={handelSubmit} >
                <label>User Name :</label>
                <input type="text" placeholder='User Name' name='userName' value={values.userName} onChange= {handelUserNameChange}/>
                {submited && !values.userName ?  <span>Please enter your Name</span> : null }
                
                <label> Start Date :  </label>
                <input type="date"  name='startDate'  value={values.startDate} onChange= {handelStartDateChange}/>
                {submited && !values.startDate?  <span>Please enter your start date</span> : null}

                <label>End Date : </label>
                <input type="date"  name='endDate'  value={values.endDate} onChange= {handelEndDateChange}/>
                {submited && !values.endDate ?  <span>Please enter your start date</span> : null}

                <button >Submit</button>
                {submited && values. userName && values.startDate && values.endDate ? <div className='success-message'>Your registration is succefully done  !</div> : null}
               

            </form>
           
           
        </div>
    )
}

export default SubmitShift;
