import React, {useState } from 'react'
import GithubOverView from './GithubOverView'

export var userContext = React.createContext(null);
 function Search() {
    const [inputValue, setInputValue]= useState("")
    const handelChange = (e) => {
        setInputValue(e.target.value)
    }
  return (
    <div>
        <input type="text" placeholder='Search' value={inputValue} onChange={handelChange}/>
        <userContext.Provider value={inputValue}>
            <GithubOverView inputValue ={inputValue} />
        </userContext.Provider>
    </div>
  )
  
}
export default Search;
