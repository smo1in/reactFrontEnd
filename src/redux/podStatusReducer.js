const ADD_TABLE_DATA ='ADD-TABLE-DATA'
const UPDATE_NEW_POD_TEXT = 'UPDATE-NEW-POD-TEXT'

let initialState = {
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
    newPodText: ''
}

const podStatusReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TABLE_DATA:
            let newTableData ={
                podName: state.newPodText,
                running: 1,
                stopped: 1, 
                overallState:'active'
            }
            state.tableData.push(newTableData)
            state.newPodText=''
            return state

        case UPDATE_NEW_POD_TEXT:
            state.newPodText = action.newText
            return state

        default: return state;
    }  
}


export const addTableDataActionCreator = () =>({type: ADD_TABLE_DATA}) //return 
export const updateNewPodTextActionCreator = (text) =>({type: UPDATE_NEW_POD_TEXT,  newText:text})

export default podStatusReducer
