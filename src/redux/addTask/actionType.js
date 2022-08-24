
import { ADDTASK, CHANGEPRIORITYCOLOR, CLEARALLCOMPLETEDTASK, COMPLETEALLTASK, COMPLETETASK, DELETETASK, FETCHTODO } from "./action";

export const fetchTodos = (todos) => {
            return {
                type:FETCHTODO,
                payload:todos
            }
}
// export const deleteTodos = (id) => {
//             return {
//                 type:DELETETODO,
//                 payload:id
//             }
// }
// export const updateTodos = (id,data) => {
//             return {
//                 type:UPDATETODO,
//                 payload:{id,data}
//             }
// }
// export const postTodos = (data) => {
//             return {
//                 type:UPDATETODO,
//                 payload:data
//             }
// }
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