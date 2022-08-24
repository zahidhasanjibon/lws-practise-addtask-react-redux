import { deleteTask } from "../addTask/actionType"

const deleteTodoMiddleware =  (id) => {

            return async(dispatch) => {

                const res = await fetch(`http://localhost:9000/todos/${id}`,{
                    method:'delete'
                })
              await res.json()
                  
        
                dispatch(deleteTask(id))

            }
       

}

export default deleteTodoMiddleware