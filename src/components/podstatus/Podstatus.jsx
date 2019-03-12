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
    <table  className="striped">
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
      
    <div class="row">
    <div class="input-field col s6">
      <input onChange ={onPodChange} ref={newPodElement} value={props.podStatusData.tableData.newPodElement}/>
      <label class="active">podName</label>
    </div>
  </div>

      <div>
        <a className="btn-floating btn-large waves-effect waves-light red" onClick={addTableData}><i class="material-icons">add</i></a>
      </div>


  </div>
  );
  
}
export default Podstatus;

