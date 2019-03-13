import React from 'react'
import './Header.css'
import {NavLink} from "react-router-dom"


let searchElement = React.createRef();

let searchRequest = () =>{
    
    let text = searchElement.current.value;
    alert(text);
} 



const Header = () =>{
<<<<<<< HEAD
    return(          
            <div>
                <ul id="dropdown1" className="dropdown-content">
                    <li><a href="#!">Profile</a></li>
                    <li><a href="#!">Setting</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">logout</a></li>
                </ul>
                <nav>
                    <div className="nav-wrapper teal lighten-2">
                    
                        <ul className="left nav ">
                        <li><a href="#s" ><h5>SYMPHONY</h5></a></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/podstatus">Pod Status</NavLink></li>
                        <li><NavLink to="/corp-release">Corp Release</NavLink></li>
                        </ul>
                        <ul className="right hide-on-med-and-down ">
                        <li><input ref={searchElement} type="search" placeholder="Search.." name="search"></input></li>
                        <li><a onClick={searchRequest}><i className="material-icons">search</i></a></li>
                        <li><img className="circle responsive-img" src="https://materializecss.com/images/yuna.jpg" alt="" /></li>
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">N.do<i className="material-icons right">arrow_drop_down</i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
          )
            
=======
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
>>>>>>> origin/master
}
 export default Header