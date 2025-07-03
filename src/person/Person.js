import React from 'react'

function Person (props) {
    return (
        <div>
            <h4> Good morning</h4>
        <p>My  first name is {props.information.firstName} </p>
        <p>My second name is {props.information.secondName} </p>
        </div>
    );
}
function Greeting (){
  const myInformation = {firstName:'Agnes', secondName:'Musiimenta'};
    return (
     <>
      
     <div className='card details' style={{backgroundColor:'orange', color:'white'}}>
    <h3  className='text-primary' >Hello</h3>
     <Person information = {myInformation} />
     </div>

     </>
    );
}

export {Person, Greeting};