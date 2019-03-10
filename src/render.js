import React from 'react'
import {BrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {addTableData} from './redux/state'
import * as serviceWorker from './serviceWorker'


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addTableData={addTableData}/>
        </BrowserRouter>, document.getElementById('root')
    )
    
} 




serviceWorker.register()