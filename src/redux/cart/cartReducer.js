import toast from 'react-hot-toast';
import products from "../../productDataBase/products";
import { ADDPRODUCT, REMOVEPRODUCT, TOTAL } from "./actionTypes";

const initialState = {
  allProducts: products,
  cartProducts: [],
  totalPrice: 0,
  totalItem: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      let updatedCart;

      // check if items quantity is less than 1
      for (let i = 0; i < state.allProducts.length; i++) {
        if (state.allProducts[i].id === action.payload.id) {
          if (state.allProducts[i].quantity <= 0) {
            toast.error('product stock out')
            return {
              ...state,
              allProducts: [...state.allProducts],
              cartProducts: [...state.cartProducts],
            };
          }
        }
      }

      // to decrease targetitem quantity

      let updatedAllProducts = state.allProducts.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return {
          ...item,
        };
      });

      // search whether the item in the cart or not

      let targetProduct = state.cartProducts.filter((item) => {
        return item.id === action.payload.id;
      });

      // if item already in cart
      if (targetProduct.length > 0) {
        updatedCart = state.cartProducts.map((d) => {
          if (d.id === action.payload.id) {
            return {
              ...d,
              quantity: d.quantity + 1,
            };
          }
          return { ...d };
        });
      } else {
        // if item not in the cart
        updatedCart = [
          ...state.cartProducts,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }

      return {
        ...state,
        allProducts: updatedAllProducts,
        cartProducts: updatedCart,
      };

    case REMOVEPRODUCT:
      // remove item from cart if item quantity less than 1
      if (action.payload.quantity <= 1) {
        let quantityUpdatedAllProducts = state.allProducts.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return {
            ...item,
          };
        });

        let removeItemFromCart = state.cartProducts.filter((item) => {
          return item.id !== action.payload.id;
        });
        return {
          ...state,
          allProducts: quantityUpdatedAllProducts,
          cartProducts: removeItemFromCart,
        };
      }

      // increase allproducts quantity
      let quantityUpdatedAllProducts = state.allProducts.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return {
          ...item,
        };
      });

      let quantityUpdatedCart = state.cartProducts.map((d) => {
        if (d.id === action.payload.id) {
          return {
            ...d,
            quantity: d.quantity - 1,
          };
        }
        return { ...d };
      });

      return {
        ...state,
        allProducts: quantityUpdatedAllProducts,
        cartProducts: quantityUpdatedCart,
      };

    case TOTAL:
      const { totalItem, totalPrice } = state.cartProducts.reduce(
        (acm, cur) => {
          const { price, quantity } = cur;
          acm.totalItem += quantity;
          acm.totalPrice += quantity * price;
          return acm;
        },
        { totalPrice: 0, totalItem: 0 }
      );
      return {
        allProducts: [...state.allProducts],
        cartProducts: [...state.cartProducts],
        totalItem,
        totalPrice,
      };

    default:
      return state;
  }
};

export default cartReducer;
