import React from 'react'
import classes from'./Sidebar.module.css'
import {NavLink} from "react-router-dom"
const Sidebar = () =>{
    return <nav className={classes.nav}>
    <div className={classes.list}>
      Pod Management
      <ul>
        <li><NavLink to="/podstatus" activeClassName={classes.activeLink}>Pod Status</NavLink></li>
        <li>Pod Provision</li>
        <li>pod Spin_up</li>
      </ul>
    </div> 
    <div>
        Instanse
        <ul>
            <li>Instance Status</li>  
        </ul>
    </div> 
  </nav>
}
export default Sidebar