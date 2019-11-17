import { FETCH_CART,FETCH_CART_ERROR,FETCH_CART_SUCCESS } from "../constants";
const INITIAL_STATE = {
    loading: false,
    flag: false,
    data:{},
    error:false,
}


export const cartReducer = (state = INITIAL_STATE, action)=> {
    switch(action.type){
        case FETCH_CART:{
            return {
                ...state,
                flag:false,
                loading: true,
                error: false,
            }
        }
        case FETCH_CART_SUCCESS:{
            return {
                loading: false,
                error: false,
                flag:true,
                data: action.data
            }
        }
        case FETCH_CART_ERROR:{
            return {
                loading: false,
                error: true,
                flag:false,
                data:{} 
            }
        }
        default:
            return state;
    }

}