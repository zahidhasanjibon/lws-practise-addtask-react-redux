

import { combineReducers } from "redux";
import taskReducer from "./addTask/taskReducer";
import filterReducer from "./filterTask/filterReducer";


const mainReducer = combineReducers({   
    todos:taskReducer,
    filters:filterReducer
})
export default mainReducer







