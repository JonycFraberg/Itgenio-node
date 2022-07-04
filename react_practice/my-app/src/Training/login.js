import React from "react";
// function Car(){
//     return(
//         <h2>This is car!</h2>
//     )
// }
// let number = 1

// const Car = (props) =>(
//     <div>
//        <h2>Car name: {props.name}</h2>
//        <p>Year: <strong>{props.year}</strong></p>
//        <p>{number +=1}</p>
//        {props.children}
//     </div>
// )
const UserCredentials = (props) =>{
    return  <h1> C возвращением!</h1>
}
const UserWrongCredentials = (props) =>{
    return  <h1> Проверьте правильно введенных данных</h1>
}
const Login = (props) =>{
    const isValidCredentials = props.isValidCredentials
    return (
        <div>
        {
        isValidCredentials === true ?
        <UserCredentials /> :
        <UserWrongCredentials />
        }
        </div>
    )    
}




export default Login