
import { ADDTASK, CHANGEPRIORITYCOLOR, CLEARALLCOMPLETEDTASK, COMPLETEALLTASK, COMPLETETASK, DELETETASK } from "./action";

export const addTask = (text) => {
            return {
                type:ADDTASK,
                payload:text
            }
}
export const deleteTask = (id) => {

            return {
                type:DELETETASK,
                payload:id
            }
}

export const completeTask = (id) => {
    return {    
        type:COMPLETETASK,
        payload:id
    }
} 
export const clearAllCompleteTask = () => {
    return {
                type:CLEARALLCOMPLETEDTASK,
    }
} 
export const  completeAllTask= () => {
    return {
            type:COMPLETEALLTASK
    }
} 
export const  changeprioritycolor= (id,color) => {
    return {
            type:CHANGEPRIORITYCOLOR,
            payload:{
                id,color
            }
    }
} 