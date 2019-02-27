import React from 'react'
import './Header.css'
import {NavLink} from "react-router-dom"
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
                        <li>search</li>
                        <li>avatar</li>
                        <li>something</li>
                    </div>
            </div>
}
 export default Header