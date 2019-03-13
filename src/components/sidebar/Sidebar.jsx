import React from "react";
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
export default Sidebar;
