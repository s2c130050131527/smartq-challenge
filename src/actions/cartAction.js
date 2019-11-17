import { CART_ADD,CART_CLEAR,CART_REMOVE } from "../constants";
export const cartAddAction = (item) =>{
    return {
        type: CART_ADD,
        value:item,
    }
}
export const cartRemoveAction = (item) =>{
    return {
        type: CART_REMOVE,
        value:item,
    }
}
export const cartClearAction = () =>{
    return {
        type: CART_CLEAR
    }
}