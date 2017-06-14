import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import actionWithAPICall from "./actionWithAPICall"
import actionWithoutAPICall from "./actionWithoutAPICall"

export default combineReducers({
    routing: routerReducer,
    actionWithAPICall,
    actionWithoutAPICall
})
