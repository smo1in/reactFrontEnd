import {createStore, combineReducers} from "redux"
import podStatusReducer from "./podStatusReducer"


let reducers = combineReducers({podStatus:podStatusReducer}) 

let store = createStore(reducers);


export default store