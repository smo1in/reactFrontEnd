import React from "react";
import "./Podstatus.css";
import "./table/Table.css";
import PodStatusTable from "./table/Table";
import {addTableDataActionCreator , updateNewPodTextActionCreator} from "../../redux/podStatusReducer"





const Podstatus = (props) =>{
 
  let tableElements=props.podStatusData.tableData.map(t => <PodStatusTable podName={t.podName} running={t.running} stopped={t.stopped} overallState={t.overallState} />);

  let newPodElement = React.createRef();

  let addTableData = () =>{ 
    props.dispatch(addTableDataActionCreator ())
    
  }

  let onPodChange = () =>{
    let text = newPodElement.current.value
    let action = updateNewPodTextActionCreator(text)
    props.dispatch(action)
}

  return (
  <div className="card horizontal">
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
                  <textarea id="icon_prefix2" class="materialize-textarea" onChange ={onPodChange} ref={newPodElement} value={props.podStatusData.newPodText}></textarea>
                  <label for="icon_prefix2">new PodName</label>
                  <a class="btn-floating pulse teal lighten-2" onClick={addTableData}><i className="material-icons">add</i></a>
                </div>
              </div>
            </form>
          </div>

        <div className="dataTables-filter">
    
            <div class="input-field">
              <input id="search" type="search" required/>
              <label class="label-icon" for="search"><i class="material-icons">search</i></label>              
              <i class="material-icons">close</i>
            </div>
          
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
  
}
export default Podstatus;

