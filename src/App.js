import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import axios from 'axios';








class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [],
      changeComponent: false,
      fName: '',
      lName: '',
      age: ''
    }
  }

//Lifecycle method which gets called after render() and calls API for user results
componentDidMount(){
 

  axios('http://localhost:8124/users')
  .then(response => response.data)
  .then(res => {
    if(res){
       //console.log(res)
      this.setState({users:[...this.state.users,...res],})
     //this.setState({users:[JSON.parse(res)]})
    }
  });
}

//renderUsers method renders the default screen values using state or data loaded in componentDidMount
renderUsers(){
  if(this.state.users.length <= 0){
    return <div> Loading...</div>
  }else{
    

    return this.state.users.map((element) => {
      console.log({element})
      //console.log({key})
      return <div key = {element._id}><ul><li>First Name:{element.fName}|Last Name:{element.lName}|Age:{element.age}</li></ul></div>
    })
  }
}

handleButton(){
  this.setState({changeComponent:true});
}

//changeHandler for input values storage into state
changeHandler = e => {
  this.setState({ [e.target.name]: e.target.value })
}

//submitHandler calls post method of userApi to post data to DB through axios library call
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
  if(!this.state.changeComponent){
   return ( 
    <div>
      <h2>Existing User Lists{this.renderUsers()}</h2>
      <button type="button" onClick={() => this.handleButton()}
       >Add New User</button>
    </div>
   )}else {
     return (<div> <h1>Add a new user</h1>
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
    </div>)
  } 
  


}

}


export default App;