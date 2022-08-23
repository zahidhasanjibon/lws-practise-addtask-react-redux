    import { useDispatch, useSelector } from "react-redux/es/exports";
import { addProduct, removeProduct, total } from "../redux/cart/actions";


export default function Cart() {

            const {cartProducts,totalItem} = useSelector((state) => state)
            const dispatch = useDispatch();

            const handleAddProduct = (item) => {
                dispatch(addProduct(item));
                dispatch(total());
            };
            const handleRemoveProduct = (item) => {
                dispatch(removeProduct(item));
                dispatch(total());
            };

  return (
            <>
                      <div
                    className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                >
                    {
                        cartProducts.length > 0 && cartProducts.map((item,i) => (
                            <div key={i} className="flex justify-between border-b-2 mb-2">
                        <div className="text-lg py-2">
                            <p>{item.productName}</p>
                        </div>
                        <div className="text-lg py-2">
                            <div
                                className="flex flex-row space-x-2 w-full items-center rounded-lg"
                            >
                                <button onClick={() => handleRemoveProduct(item)}
                                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M18 12H6"
                                        />
                                    </svg>
                                </button>
                                <p>{item.quantity}</p>
                                <button onClick={() => handleAddProduct(item)}
                                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                        ))
                    }

                    <div
                        className="flex justify-center items-center text-center"
                    >
                        <div className="text-xl font-semibold">
                            <p>Total Item</p>
                            <p className="text-5xl">{totalItem}</p>
                        </div>
                    </div>
                </div>
            </>
  )
}
