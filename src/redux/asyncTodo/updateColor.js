import { changeprioritycolor } from "../addTask/actionType";



const updateTodoColorMiddleware =  (id,color) => {

    return async(dispatch) => {

        const res = await fetch(`http://localhost:9000/todos/${id}`,{
            method:'PATCH',
            body:JSON.stringify({
                color:color
            }),
            headers:{
                "Content-type":"application/json"
            }
        })
  await res.json()

        dispatch(changeprioritycolor(id,color))

    }


}

export default updateTodoColorMiddleware