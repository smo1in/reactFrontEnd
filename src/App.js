import React  from 'react';
import './App.css';


const App = () => {
 
    return (
    <div className='app-wrapper'>
        <header>
          <img src ='https://assets.themuse.com/uploaded/companies/468/small_logo.png?v=52a6f3b08df9d999e57db53805c53dc28ac609638a51afd760ad369b11a82491'/>
        </header>
          
        
        <nav>
          <div>
            Pod Management
            <li>
              <ul>Pod Status</ul>
              <ul>Pod Provision</ul>
              <ul>pod Spin_up</ul>
            </li>
          </div> 
          
          <div>
            Instance Status
          </div> 
        </nav>
      </div>
      
      );
  }

  

export default App;