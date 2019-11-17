import { FETCH_MENU,FETCH_MENU_ERROR,FETCH_MENU_SUCCESS } from "../constants";
const INITIAL_STATE = {
    loading: false,
    flag: false,
    data:[],
    error:false,
}


export const menuReducer = (state = INITIAL_STATE, action)=> {
    switch(action.type){
        case FETCH_MENU:{
            return {
                ...state,
                flag:false,
                loading: true,
                error: false,
            }
        }
        case FETCH_MENU_SUCCESS:{
            return {
                loading: false,
                error: false,
                flag:true,
                data: action.data
            }
        }
        case FETCH_MENU_ERROR:{
            return {
                loading: false,
                error: true,
                flag:false,
                data:[]
            }
        }
        default:
            return state;
    }

}