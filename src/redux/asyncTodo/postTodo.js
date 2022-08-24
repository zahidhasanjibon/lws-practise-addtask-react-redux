import { addTask } from "../addTask/actionType";

const postTodoMiddleware =  (text) => {

    return async(dispatch) => {

        const res = await fetch(`http://localhost:9000/todos`,{
            method:'POST',
            body:JSON.stringify({
                text:text
            }),
            headers:{
                "Content-type":"application/json"
            }
        })
                const data=    await res.json()

                console.log(data);

        dispatch(addTask(text))

    }


}

export default postTodoMiddleware