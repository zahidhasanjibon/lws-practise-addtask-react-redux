import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodoMiddleware from "../redux/asyncTodo/fetchTodo";
import Todo from "./Todo";
export default function TodoList() {

    const {todos} = useSelector((state) => state)
    const {filters} = useSelector((state) => state)    
    const {colors,status} = filters

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodoMiddleware)
    },[dispatch])
    
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
             {
                todos
                .filter((todo) => {
                        switch (status) {
                            case 'all':
                                
                            return true
                            case 'complete':
                                return todo.complete
                            case 'incomplete':
                                return !todo.complete

                            default:
                                return true
                        }
                })
                .filter((todo) => {
                        if(colors.length > 0){
                            return colors.includes(todo?.color)
                        }
                        return true
                })
             .map((todo) => (
                    <Todo key={todo.id} todo={todo}/>
               )) }
        </div>
    );
}
