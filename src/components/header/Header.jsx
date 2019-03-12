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
                    <li><h5>SYMPHONY</h5></li>
                    </div>
                    <div className="left-nav">
                        
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/pod-status">Pod Status</NavLink></li>
                        <li><NavLink to="/corp-release">Corp Release</NavLink></li>
                    </div>

                    <div className='right-nav'>
                        <div>
                        <li><input ref={searchElement} type="search" placeholder="Search.." name="search"></input></li>
                        <li><button onClick={searchRequest}><i className="material-icons">search</i></button></li>
                        </div>
                        <a href="#s">N.do</a>
                        
                    </div>
            </div>
}
 export default Header