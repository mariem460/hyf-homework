import React, { useState, useEffect } from 'react'
import  {userContext} from './Search';
import "./GithubOverView.css"

function GithubOverView() {    
    const [users, setUsers] = useState([])
    var inputValue = React.useContext(userContext);
        useEffect(()=> {
            if(inputValue !== ""){
                fetch(`https://api.github.com/search/users?q=${inputValue}`)
                .then((data)=> data.json())
                .then((result)=> setUsers(result.items))
            }
           
        }, [inputValue])

    const usersNames = users.map((user)=><li key={user.id}>{user.login}</li>)

  return (
      <div>
          <ul>
              {usersNames}
          </ul>
      </div>
  )
  
}


export default GithubOverView;