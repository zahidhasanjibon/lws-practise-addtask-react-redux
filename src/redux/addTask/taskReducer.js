import { ADDTASK, CHANGEPRIORITYCOLOR, CLEARALLCOMPLETEDTASK, COMPLETEALLTASK, COMPLETETASK, DELETETASK, FETCHTODO } from "./action"

const initialState = [
               
            ]

        const generateId = (allTask) => {

            const maxNumber = allTask.reduce((acm,cur) => {
                    return Math.max(acm,cur.id)
            },-1)

                return maxNumber + 1
        }


    const taskReducer = (state=initialState,action) => {

        switch (action.type) {

            case FETCHTODO:
                return [...action.payload]

            case ADDTASK:

            return [...state,
            {
                id:generateId(state),
                complete:false,
                text:action.payload
            }] 
        
            case DELETETASK:

            return state.filter((task) => task.id !== action.payload )


            case COMPLETETASK:
                        
                return state.map((task) => {
                    if(task.id === action.payload){
                        return {
                            ...task,
                            completed:!task.completed
                        }
                    }
                    return {...task}
                })


                case COMPLETEALLTASK:

                return state.map((task) => {
                    return {...task,
                    completed:true}
                })

                case CLEARALLCOMPLETEDTASK:
                    return state.filter((task) => !task.completed )


                case CHANGEPRIORITYCOLOR:

                return state.map((task) => {
                    if(task.id === action.payload.id){
                        return {...task,color:action.payload.color}
                    }
                    return {...task}
                })

            default:
                return state
        }

    }
    export default taskReducer

