import React from "react";
import "./Podstatus.css";
import "./table/Table.css";
import PodStatusTable from "./table/Table";

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
    <table  className="table table-striped table-bordered" styles="width:100%">
    <thead>
        <tr>
            <td>Pod Name</td>
            <td>Running</td>
            <td>Stopped</td>
            <td>Overall State</td>
            <td>Start</td>
            <td>Stop</td>
            <td>Restart</td>
            <td>Log</td>
            <td>Upgrade Pod</td>
        </tr>
    </thead>

    <tbody>
        {tableElements}
    </tbody>
        
    </table>

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