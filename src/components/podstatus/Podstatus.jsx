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
<<<<<<< HEAD
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
        <div className="table-footer">
          <div class="addNewPod">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <textarea id="icon_prefix2" class="materialize-textarea" onChange ={onPodChange} ref={newPodElement} value={props.podStatusData.tableData.newPodElement}></textarea>
                  <label for="icon_prefix2">new PodName</label>
                  <a class="btn-floating pulse teal lighten-2" onClick={addTableData}><i className="material-icons">add</i></a>
                </div>
              </div>
            </form>
          </div>

        <div className="dataTables-filter">
          <label>
            <input type="search" class="" placeholder="Enter search term" aria-controls="default-table-example"/>
          </label>
          <ul class="pagination">
            <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
            <li class="active teal lighten-2"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="waves-effect"><a href="#!">3</a></li>
            <li class="waves-effect"><a href="#!">4</a></li>
            <li class="waves-effect"><a href="#!">5</a></li>
            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
          </ul>
        </div>
        </div>
      </table>
    
    
  </div>

  
  )
=======
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
>>>>>>> origin/master
  
}
export default Podstatus;

