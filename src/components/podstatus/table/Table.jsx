import React from "react";
import "./Table.css";

const Table = props => {
  return <table border = "1" width = "100%">
  
    <tr>
      <th>{props.podName}</th>
      <th>{props.running}</th>
      <th>{props.stopped}</th>
      <th>{props.overallState}</th>
    </tr> 
</table>;
};
export default Table;
