import React from "react";


function UserInput(props){
    return(<div>
    <form >
       <input className="inputData" type={props.type} placeholder={props.name}/>
    </form>   
    </div>

    )
}

export default UserInput;

