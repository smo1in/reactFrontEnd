import React from "react";
import "./Podstatus.css";
import "./table/Table.css";
import PodStatusTable from "./table/Table";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



const Podstatus = (props) =>{
 
  let tableElements=props.podStatusData.tableData.map(t => <PodStatusTable podName={t.podName} running={t.running} stopped={t.stopped} overallState={t.overallState} />);

  let newPodElement = React.createRef();

  let addTableData = () =>{ 
    props.addTableData()
    
  }

  let onPodChange = () =>{
    let text = newPodElement.current.value
    props.updateNewPodText(text)
}

  return (
     <div>
        <div>
          <Table >
              <TableHead>
                <TableRow>
                  <TableCell>Pod Name</TableCell>
                  <TableCell align="right">Running</TableCell>
                  <TableCell align="right">Stopped</TableCell>
                  <TableCell align="right">Overall State</TableCell>
                  <TableCell align="right">Start</TableCell>
                  <TableCell align="right">Stop</TableCell>
                  <TableCell align="right">Restart</TableCell>
                  <TableCell align="right">Log</TableCell>
                  <TableCell align="right">Upgrade Pod</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                    {tableElements}
              </TableBody>
            </Table>
        </div>
      

        <div>
          <textarea onChange ={onPodChange} ref={newPodElement} value={props.podStatusData.tableData.newPodElement}  />
        </div>

        <div>
          <button onClick={addTableData}>newPodName</button>
        </div>
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