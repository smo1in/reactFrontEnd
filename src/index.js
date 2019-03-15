import React from 'react'
import {BrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './redux/store'
import * as serviceWorker from './serviceWorker'
 
let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    )
    
} 

rerenderEntireTree(store.getState())
 
store.subscribe(rerenderEntireTree)

serviceWorker.register()
