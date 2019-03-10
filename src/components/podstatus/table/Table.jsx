import React from "react";
import "./Table.css";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

let upgradePod =() =>{
  alert('upgrade');
}


const PodStatusTable = props => {
  return (
    <TableRow>
      <TableCell align="right">{props.podName}</TableCell>
      <TableCell align="right">{props.running}</TableCell>
      <TableCell align="right">{props.stopped}</TableCell>
      <TableCell align="right">{props.overallState}</TableCell>
      <TableCell align="right"><i className="material-icons dp48">play_circle_filled</i></TableCell>
      <TableCell align="right"><i className="material-icons">remove_circle</i></TableCell>
      <TableCell align="right"><i className="material-icons">loop</i></TableCell>
      <TableCell align="right"><a href='#s'>Log</a></TableCell>
      <TableCell align="right"><Button onClick={upgradePod} variant="contained" color="primary">Upgrade</Button></TableCell>
    </TableRow>
  );
};



export default PodStatusTable;
