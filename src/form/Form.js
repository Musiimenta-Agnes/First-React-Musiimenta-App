import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Form.css'


function Form ({myname,email, password}){
    return (
     <div>
        <form className='form'>
         <b><p style={{textAlign:'center'}}>Login</p> </b>
        <label>Name:</label><br/>
        <input type="text" style={{borderRadius:'7px'}} placeholder="Enter Your Name" />
        <br/> <br/>

        <label>Email:</label><br/>
        <input type="email" style={{borderRadius:'7px'}} placeholder="Enter Your Email" />
         <br/> <br/>

        <label>Password:</label><br/>
        <input type="password" style={{borderRadius:'7px'}} placeholder="Enter Your Password" />
        </form>
        

     </div>
    );
};

export default Form;




