import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import reducerResGetInfo from "./resGetInfo";


const rootReducer = combineReducers({
    routing: routerReducer,
    reducerResGetInfo: reducerResGetInfo,
})

export default rootReducer;