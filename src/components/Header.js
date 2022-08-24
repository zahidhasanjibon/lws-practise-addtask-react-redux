import { useState } from "react";
import { useDispatch } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { clearAllCompleteTask, completeAllTask } from "../redux/addTask/actionType";
import postTodoMiddleware from "../redux/asyncTodo/postTodo";


export default function Header() {
    const dispatch = useDispatch()

        const [inp,setInp] = useState()
    const handleAddTask = (e) => {
            e.preventDefault()
            dispatch(postTodoMiddleware(inp))
            setInp('')
    }    
    return (
        <div>
            <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={handleAddTask}>
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                value={inp}
                onChange={(e) => setInp(e.target.value)}
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer">
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span onClick={() => dispatch(completeAllTask())}>Complete All Tasks</span>
                </li>
                <li onClick={() =>dispatch(clearAllCompleteTask()) } className="cursor-pointer">Clear completed</li>
            </ul>
         
        </div>
    );
}
