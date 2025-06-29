import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Greet from './Greet.js';




  function App() {
  const shoot = function Shot (){
    alert("Great Shot!")
  }

  // Creating a list
  const list = ['Agnes', 'Violah', 'Mary', 'Shakillah', 'Gillian']
   
  return (

    <div >
     <p className='display-1' style={{textAlign:'center', color: 'purple'}}>REACT LECTURE JOURNEY </p>
     <div className='goal-shooting'>
          <h3>Click the button below to take shoot a goal!</h3>
          <button className='shot-btn'  onClick={shoot}>Take the shot!</button>
     </div>
     
     {/* Returning our list by mapping through the list*/}

<br/>
        <div className='list'>
          <h3 className='list-heading'>The list of my class members</h3>
              <ul>
                  {list.map(myList =>  <li key = {myList} >{myList}</li>)}
              </ul>
        </div>


<br/><br/>
{/* Greetings cards         */}
 <h1 className='text-danger' style={{textAlign:'center'}}>THE GREETINGS CARDS</h1>

<br/>
     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
      <Greet
        name="Agnes" 
        age={23} 
        school="Makerere University" 
        address="Kampala, Uganda" 
      />
      <Greet
        name="Brian" 
        age={25} 
        school="Kyambogo University" 
        address="Entebbe, Uganda" 
      />
      <Greet
        name="Joan" 
        age={22} 
        school="Mbarara University" 
        address="Mbarara, Uganda" 
      />
    </div>



    </div>
  ) ;  
}


export default App;


