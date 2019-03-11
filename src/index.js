import React from 'react'
import {BrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import state, {subscribe} from './redux/state'
import {addTableData, updateNewPodText} from './redux/state'
import * as serviceWorker from './serviceWorker'

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addTableData={addTableData} updateNewPodText={updateNewPodText}/>
        </BrowserRouter>, document.getElementById('root')
    )
    
} 

rerenderEntireTree(state)
 
subscribe(rerenderEntireTree)

serviceWorker.register()
