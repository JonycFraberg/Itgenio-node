//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Car from './Car/Car.js';
import Login from './Training/login.js';
import Notifications from './Training/notifications';
import NameForm from './Training/input';


function App() {
  // const divStyle = {
  //   'text-align':'center'
  // }
  const handleClick = (e,text) =>{
    e.preventDefault();
    console.log("Link clicked")
    console.log(text)
  }
  const unreadNotifications = ["new email","new message","new message 2"]
  return (
    <>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header> */}
     <Car name = {"Ford"} year={2018}> 
      <p>Color</p>
     </Car>
     <Car name = {"Audi"} year={2014}/>
     <Car name = {"Volga"} year={1990}/>
    <Login isValidCredentials={false}/>
    <Notifications notes = {unreadNotifications}/>
    <a href='#' onClick ={(e) => handleClick(e,"textt")}>
      onClick here
    </a>

      </div>
      <NameForm/>



    </>
  );


 
}

export default App;
