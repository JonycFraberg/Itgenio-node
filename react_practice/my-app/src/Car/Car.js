import React from "react";
// function Car(){
//     return(
//         <h2>This is car!</h2>
//     )
// }
let number = 1

const Car = (props) =>(
    <div>
       <h2>Car name: {props.name}</h2>
       <p>Year: <strong>{props.year}</strong></p>
       <p>{number +=1}</p>
       {props.children}
    </div>
)

export default Car;