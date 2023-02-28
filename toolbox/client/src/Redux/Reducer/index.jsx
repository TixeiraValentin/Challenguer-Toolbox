import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import reducerResGetInfo from "./resGetInfo";
import reducerResGetInfoByName from "./resGetInfoByName";


const rootReducer = combineReducers({
    routing: routerReducer,
    reducerResGetInfo: reducerResGetInfo,
    reducerResGetInfoByName: reducerResGetInfoByName,
})

export default rootReducer;