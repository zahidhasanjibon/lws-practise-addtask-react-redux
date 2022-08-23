import { ADDTASK, CHANGEPRIORITYCOLOR, CLEARALLCOMPLETEDTASK, COMPLETEALLTASK, COMPLETETASK, DELETETASK } from "./action"

const initialState = [
                {
                id:1,
                text:'Learn javascript',
                complete:false
                 },
                {
                id:2,
                text:'Learn Redux',
                complete:false,
                color:'green'
                 }
            ]

        const generateId = (allTask) => {

            const maxNumber = allTask.reduce((acm,cur) => {
                    return Math.max(acm,cur.id)
            },-1)

                return maxNumber + 1
        }


    const taskReducer = (state=initialState,action) => {

        switch (action.type) {
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
                            complete:!task.complete
                        }
                    }
                    return {...task}
                })


                case COMPLETEALLTASK:

                return state.map((task) => {
                    return {...task,
                    complete:true}
                })

                case CLEARALLCOMPLETEDTASK:
                    return state.filter((task) => !task.complete )


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

