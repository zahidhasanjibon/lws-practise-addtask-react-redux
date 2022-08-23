import { useDispatch, useSelector } from "react-redux";
import { colorChange, statusChange } from "../redux/filterTask/actionType";
export default function Footer() {
    const {filters} = useSelector((state) => state)
            const {colors,status} = filters
    const handleColorChanghe = (color) => {
        const colorChnageType = colors.includes(color)

        if(colorChnageType){
            dispatch(colorChange(color,'remove'))
        }else {    
        dispatch(colorChange(color,'add'))
        }
               
    }

    const dispatch = useDispatch()
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>2 tasks left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li onClick={() => dispatch(statusChange('all'))} className={`cursor-pointer ${status === 'all' && 'font-bold'}`}>All</li>
                <li>|</li>
                <li onClick={() => dispatch(statusChange('incomplete'))} className={`cursor-pointer ${status === 'incomplete' && 'font-bold'}`}>Incomplete</li>
                <li>|</li>
                <li onClick={() => dispatch(statusChange('complete'))} className={`cursor-pointer ${status === 'complete' && 'font-bold'}`}>Complete</li>
                <li></li>
                <li></li>
                <li onClick={() => handleColorChanghe('green')} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}></li>
                <li  onClick={() => handleColorChanghe('red')}  className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}></li>
                <li  onClick={() => handleColorChanghe('yellow')}  className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`}></li>
            </ul>
        </div>
    );
}
