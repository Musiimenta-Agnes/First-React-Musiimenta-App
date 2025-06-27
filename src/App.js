import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';




  function App() {
  const shoot = function Shot (){
    alert("Great Shot!")
  }
   
  return (

    <div >
     <p className='display-1' style={{textAlign:'center', color: 'purple'}}>REACT LECTURE JOURNEY </p>
     <div className='goal-shooting'>
          <h3>Click the button below to take shoot a goal!</h3>
          <button className='shot-btn'  onClick={shoot}>Take the shot!</button>
     </div>
     
  
    </div>
  ) ;  
}


export default App;


