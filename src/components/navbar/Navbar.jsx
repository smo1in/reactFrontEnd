import React from 'react'
import classes from'./Navbar.module.css'
const Navbar = () =>{
    return <nav className={classes.nav}>
    <div className={classes.list}>
      Pod Management
      <ul>
        <li>Pod Status</li>
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
export default Navbar