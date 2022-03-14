import { ActionAttributes } from "./ActionAttributes";

export function ListToDo(props) {
    return(
        <ul>
                {props.hellou.map((thing)=> {
                    return ( 
                        <ActionAttributes description = {thing.description}  date= {thing.date}
                        id= {thing.id}/>
                    )
                })}
      
        </ul>
    )
}