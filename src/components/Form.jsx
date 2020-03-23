import React, { Component } from "react";

import axios from 'axios';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {fName:'',
        lName:'',
        age:''

        }

    }
    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

   submitHandler = e => {
    e.preventDefault();
    
 
    console.log(this.state);
     axios({
         method: 'post',
         url: 'http://localhost:8124/users',
         data: {
           fName: this.state.fName,
           lName: this.state.lName,
           age:this.state.age
         }
       }).then(response => {
                       console.log(response.data)
					   //Load initial list of get url
					   //this.props.setState({changeComponent:false});
					   //console.log(this.props.state)
          	 	})
          	 	.catch(error => {
          	 		console.log(error)
          	 	})

      

    
   }


    render(){
        const {fName,lName,age} = this.state;
       
		return (
			<div>
            <h1>Add a new user</h1>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="fName"
							value={fName}
							onChange={this.changeHandler}
                            placeholder="First name"
                            
						/>
					</div>
					<div>
						<input
							type="text"
							name="lName"
							value={lName}
							onChange={this.changeHandler}
                            placeholder="Last Name"
						/>
					</div>
					<div>
						<input
							type="text"
							name="age"
							value={age}
							onChange={this.changeHandler}
                            placeholder="Age"
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)    }
}





export default Form;