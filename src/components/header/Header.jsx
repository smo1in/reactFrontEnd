import React from 'react'
import './Header.css'
import {NavLink} from "react-router-dom"


let searchElement = React.createRef();

let searchRequest = () =>{
    
    let text = searchElement.current.value;
    alert(text);
} 



const Header = () =>{
    return <div className='header'> 
                    <div>
                    <li><img src ='https://assets.themuse.com/uploaded/companies/468/small_logo.png?v=52a6f3b08df9d999e57db53805c53dc28ac609638a51afd760ad369b11a82491' alt="logo"/></li>
                    </div>
                    <div className="left-nav">
                        
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/pod-status">Pod Status</NavLink></li>
                        <li><NavLink to="/corp-release">Corp Release</NavLink></li>
                    </div>

                    <div className='right-nav'>
                        <div>
                            <input   ref={searchElement} type="search" placeholder="Search.." name="search"></input>
                            <button onClick={searchRequest}><i className="material-icons">search</i></button>
                        </div>
                        <a href="#s">N.do</a>
                        
                    </div>
            </div>
}
 export default Header