import { ActionAttributes, TodolistItems } from "./TodolistItems";

export function ListToDo(props) {
    return(
        <ul>
                {props.ListToDo.map((thing)=> {
                    return ( 
                        <TodolistItems description = {thing.description}  date= {thing.date}
                        id= {thing.id}/>
                    )
                })}
      
        </ul>
    )
}