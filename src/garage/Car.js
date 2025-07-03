import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Car.css'


function Cars (props) {
   
    return (
        <div>
        <p>I am a car of brand <span className='text-warning'> {props.brand.carName}</span></p>
        <p>I am of model <span className='text-info'> {props.brand.model}</span></p>
        <p>I was made in the year of  <span className='text-warning'> {props.brand.year}</span></p>
        </div>
    );  
}

function Garage (){
    const carInfo = {carName:'Ford', model:'Mustag', year: 2023};
    return (
        <div className='card details' style={{backgroundColor: 'green'}}>
        <Cars brand = {carInfo} />
        <p>Who lives in my <span className='text-info'>garage?</span> </p>
       
        </div>
    );
}
    export {Cars, Garage}; 