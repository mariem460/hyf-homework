import React from 'react'
import "./SubmitShift.css"
import { useState } from 'react';

const SubmitShift = () => {
    const [values, setValues] = useState({
        userName : "",
        startDate : "",
        endDate : ""
    })

    const [submitted, setSubmit] = useState(false);
      
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

    }
    console.log(values)

    return (
        <div className='formInput'>
            <h1>Time Registration </h1>
            <form className='registration-form'onSubmit={handelSubmit} >
                <label>User Name :</label>
                <input type="text" placeholder='User Name' name='userName' value={values.userName} onChange= {handelUserNameChange}/>
                {submitted && !values.userName ?  <span>Please enter your Name</span> : null }
                
                <label> Start Date :  </label>
                <input type="date"  name='startDate'  value={values.startDate} onChange= {handelStartDateChange}/>
                {submitted && !values.startDate?  <span>Please enter your start date</span> : null}

                <label>End Date : </label>
                <input type="date"  name='endDate'  value={values.endDate} onChange= {handelEndDateChange}/>
                {submitted && !values.endDate ?  <span>Please enter your start date</span> : null}

                <button >Submit</button>
                {submitted && values. userName && values.startDate && values.endDate ? <div className='success-message'>Your registration is done succefully !</div> : null}

            </form>
           
           
        </div>
    )
}

export default SubmitShift;
