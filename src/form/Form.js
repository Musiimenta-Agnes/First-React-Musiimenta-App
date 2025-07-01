import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Form.css'


function Form ({myname,email, password}){
    return (
     <div>
      
        <p>Hello!</p>
        <label>Name:</label>
        <input type="text" placeholder="Enter Your Name" />
        <br/> <br/>

        <label>Email:</label>
        <input type="email" placeholder="Enter Your Email" />
         <br/> <br/>

        <label>Password:</label>
        <input type="password" placeholder="Enter Your Password" />
        

     </div>
    );
};

export default Form;




