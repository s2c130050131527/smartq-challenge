import { SEARCH_CHANGE, SEARCH_CLEAR } from "../constants";

const INITIAL_STATE = '';

export const searchChangeReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        
        case SEARCH_CHANGE:{
            return action.value
        }
        case SEARCH_CLEAR:{
            return '';
        }
        default:{
            return state;
        }
    }
}
