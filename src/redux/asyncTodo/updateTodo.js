import { completeTask } from "../addTask/actionType"

const updateTodoMiddleware =  (id,status) => {

    return async(dispatch) => {

        const res = await fetch(`http://localhost:9000/todos/${id}`,{
            method:'PATCH',
            body:JSON.stringify({
                completed:!status
            }),
            headers:{
                "Content-type":"application/json"
            }
        })
      const data = await res.json()
          console.log(data);

        dispatch(completeTask(id))

    }


}

export default updateTodoMiddleware