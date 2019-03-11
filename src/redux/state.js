let rerenderEntireTree = () => {
        console.log('state has changed')
}

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
                ],
                newPodText: 'text'

               
       
        }

       
}
window.state=state

export const addTableData = () => {
       
        let newTableData ={
                podName: state.podStatus.newPodText,
                running: 1,
                stopped: 1, 
                overallState: 'active'

        }
 state.podStatus.tableData.push(newTableData)
 state.podStatus.newPodText=''
 rerenderEntireTree(state)
}

export const updateNewPodText = (newText) => {       
 state.podStatus.newPodText = newText
 rerenderEntireTree(state)
}

export const subscribe = (observer) =>{
        rerenderEntireTree = observer
}

export default state;
