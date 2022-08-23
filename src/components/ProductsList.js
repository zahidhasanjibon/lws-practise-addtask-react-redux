

import { useDispatch } from "react-redux";
import { addProduct, total } from "../redux/cart/actions";
    
export default function ProductsList({item}) {

    const dispatch = useDispatch();

  

    const handleAddProduct = (item) => {
        dispatch(addProduct(item));
        dispatch(total());
    };


  return (
    <div
    class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
>
    <div class="flex justify-between px-4 items-center">
        <div class="text-lg font-semibold">
            <p>{`${item.productName} (${item.quantity})`} </p>
            <p class="text-gray-400 text-base">{`TK ${item.price}`}</p>
        </div>
        <div class="text-lg font-semibold">
            {
                item.quantity < 1 ? <span
                className="rounded-full text-xs bg-red-600 md:text-sm text-white px-2 py-1"
            >
                out of stock
            </span> :   <button
                onClick={() => handleAddProduct(item)}
                class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </button>
            }
            
          
        </div>
    </div>
</div>
  )
}
