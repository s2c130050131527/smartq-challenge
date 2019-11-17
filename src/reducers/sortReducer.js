import { SORT_CHANGE, SORT_CLEAR } from "../constants";

const INITIAL_STATE = '';

export const sortChangeReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        
        case SORT_CHANGE:{
            return action.value
        }
        case SORT_CLEAR:{
            return '';
        }
        default:{
            return state;
        }
    }
}
