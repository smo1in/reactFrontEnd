import {rerenderEntireTree} from './../render'

let state = {
        podStatus:{
                tableData:[
                        {podName: 'sym-qa34-qa-chat-glb-1', running: 1, stopped: 1,  overallState: 'active'},
                        {podName: 'sym-qa3-qa-chat-glb-1',  running: 2, stopped: 3,  overallState: 'inActive'},
                        {podName: 'sym-qa5-qa-chat-glb-1',  running: 1, stopped: 5,  overallState: 'inActive'},
                        {podName: 'sym-qa7-qa-chat-glb-1',  running: 6, stopped: 7,  overallState: 'active'},
                        {podName: 'sym-qa9-qa-chat-glb-1',  running: 2, stopped: 9,  overallState: 'inActive'},
                        {podName: 'sym-qa11-qa-chat-glb-1', running: 3, stopped: 4,  overallState: 'active'},
                        {podName: 'sym-qa13-qa-chat-glb-1', running: 2, stopped: 3,  overallState: 'inActive'},
                        {podName: 'sym-qa34-qa-chat-glb-1', running: 6, stopped: 8,  overallState: 'active'},
                        {podName: 'sym-qa17-qa-chat-glb-1', running: 2, stopped: 3,  overallState: 'active'}
                ]
       
        }
}

export let addTableData = (podNameText) => {
       
        let newTableData ={
                podName: podNameText,
                running: 1,
                stopped: 1, 
                overallState: 'active'

        }
 state.podStatus.tableData.push(newTableData)
 rerenderEntireTree(state)
}

export default state;
