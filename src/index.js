import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//const element =<div><h1>Hello, world</h1> <h2>Welcome to react application</h2> </div> ;
ReactDOM.render(<App name="New User"/>, document.getElementById('root'));

//As React elements are immutable so to bring in any change in UI needs rendering of new elements.It calls ReactDOM.render() every second from a setInterval() callback.
// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
//   }
  
//   setInterval(tick, 1000);
  