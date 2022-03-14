export function ActionAttributes (props) {
    return (
        <h3>
            <li>
            <div>
                <h4 className="thingToDo" >{props.id} To do:</h4> {props.description}
            </div> 
            <div>
                <h4 className="date">On: </h4>
                {props.date}
            

            </div>

            
            </li>
        </h3>
    )
}