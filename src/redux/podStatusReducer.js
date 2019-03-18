const ADD_TABLE_DATA ='ADD-TABLE-DATA'
const UPDATE_NEW_POD_TEXT = 'UPDATE-NEW-POD-TEXT'

const podStatusReducer = (state,action) => {
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
