import React from 'react'
import './Table.css'


const Table = (props) =>{
  debugger;
  let tableElements=props.data.map(t => <Table podName={t.podName} running={t.running} stopped={t.stopped} overallState={t.overallState} />);
  
  return <div>
            {tableElements}
         </div>
}
export default Table