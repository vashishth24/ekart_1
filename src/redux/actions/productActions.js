import { ActionTypes } from "../contants/action-types";

export const setproducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,

    };

};
export const selectedProducts=(products)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:products,

    };

};
