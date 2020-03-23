import React from "react";
import UserInput from "./UserInput";

function Login(){
    return(<div><h2>User Login</h2>
       <UserInput name="User Name"/>
       <UserInput name="Password" type="password"/>
       
       <button type="button">Submit</button>
     

    </div>)
}

export default Login;