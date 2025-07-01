import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Car.css'


function Car (props) {
   
    return (
        <p>I am a car of brand {props.brand.carName} </p>
        
    );  
}

function Garage (){
    const carInfo = {carName:'Ford', model:'Mustag'};
    return (
        <div className='card' style={{backgroundColor:'green', width:'200px', color:'White', padding: '10px 10px'}}>
        <Car brand = {carInfo} />
        <p>Who lives in my garage?</p>
       
        </div>
    );
}
    export {Car, Garage}; 