import { ADDPRODUCT, REMOVEPRODUCT, TOTAL } from "./actionTypes";

export const addProduct = (item) => {
    return {
        type: ADDPRODUCT,
        payload:item
    };
};

export const removeProduct = (item) => {
    return {
        type: REMOVEPRODUCT,
        payload:item
    };
};
export const total = () => {
    return {
        type: TOTAL,
    };
};
