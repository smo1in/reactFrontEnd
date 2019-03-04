import React from "react";
import "./Podstatus.css";
import "./table/Table";
import Table from "./table/Table";

const Podstatus = (props) =>{

  let tableElements=props.podStatusData.tableData.map(t => <Table podName={t.podName} running={t.running} stopped={t.stopped} overallState={t.overallState} />);

  return (
    <div>
      <tr>
        <th>podName</th>
        <th>running</th>
        <th>stopped</th>
        <th>overallState</th>
      </tr> 
      {tableElements}
    </div>
  );

}
export default Podstatus;


/*let tableElements=props.podStatusData.tableDatadata.map(t => <Table podName={t.podName} running={t.running} stopped={t.stopped} overallState={t.overallState} />);
const Podstatus = (props) => {
  
  return (
    <div>
      <Table data={props.podStatusData.tableData} />
    </div>
  );
};
export default Podstatus;
*/