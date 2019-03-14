let store={

        _state: {
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

        
        },
       
        getState(){
                return this._state;
        },

         _callSubscriber(){
        console.log('state has changed')
        },

        

        addTableData(){
        
                let newTableData ={
                        podName: this._state.podStatus.newPodText,
                        running: 1,
                        stopped: 1, 
                        overallState: 'active'

                }
        this._state.podStatus.tableData.push(newTableData)
        this._state.podStatus.newPodText=''
        this._callSubscriber(this._state)
        },

        updateNewPodText(newText){       
        this._state.podStatus.newPodText = newText
        this._callSubscriber(this._state)
        },

        subscribe(observer){
                this._callSubscriber = observer
        },
        
}
window.store=store
export default store
