import React from "react";
import "./Table.css";



let upgradePod =() =>{
  alert('upgrade');
}


const PodStatusTable = props => {
  return (
    <tr>
      <td>{props.podName}</td>
      <td>{props.running}</td>
      <td>{props.stopped}</td>
      <td>{props.overallState}</td>
      <td><i className="material-icons dp48">play_circle_filled</i></td>
      <td><i className="material-icons">remove_circle</i></td>
      <td><i className="material-icons">loop</i></td>
      <td><a href='#s'>Log</a></td>
<<<<<<< HEAD
      <td><a className="btn waves-effect waves-light teal lighten-2" onClick={upgradePod}>Upgrade</a></td>
=======
      <td><a class="waves-effect waves-light btn" onClick={upgradePod}>Upgrade</a></td>
>>>>>>> origin/master
    </tr>
  );
};



export default PodStatusTable;