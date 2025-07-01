import React from 'react'
import './Greet.css';

function Greet({name, age, school, address}){
    return (
    <div className='greetings-card'>
        <h4 className='name'>Hello, my name is  {name} </h4>
        <p>I am {age} years old</p>
        <p>I study from  {school} </p>
        <p>I reside in {address} </p>
  
    </div>
    );
};

export default Greet;