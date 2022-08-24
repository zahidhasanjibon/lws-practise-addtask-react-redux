    import { fetchTodos } from "../addTask/actionType"

    const fetchTodoMiddleware = async (dispatch) => {

            const res = await fetch('http://localhost:9000/todos')
            const data = await res.json()

            dispatch(fetchTodos(data))

    }

    export default fetchTodoMiddleware