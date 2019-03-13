import React from "react";
<<<<<<< HEAD
import classes from "./Sidebar.css";
import { NavLink } from "react-router-dom";



const Sidebar = () => {
  return (
    
    <div className="collection">  
          
            <ul className="collection-item">Pod Management
            <li className="collection-item"><NavLink to="/podstatus" activeclass={classes.activeLink}>Pod Status</NavLink></li>
            <li className="collection-item">Pod Provision</li>
            <li className="collection-item">pod Spin_up</li>
            </ul>
        

            <ul className="collection-item">Instanse
            <li className="collection-item">Instance Status</li>
            </ul>
          
    </div>
    
  )
}
=======
import classes from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    
    <nav className={classes.nav}>
      <div className={classes.list}>
        Pod Management
        <ul>
          <li>
            <NavLink to="/podstatus" activeClassName={classes.activeLink}>
              Pod Status
            </NavLink>
          </li>
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
    
  );
};
>>>>>>> origin/master
export default Sidebar;
