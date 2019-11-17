import { SEARCH_CHANGE,SEARCH_CLEAR } from "../constants";


export const changeSearch = (value) => ({
    type:SEARCH_CHANGE,
    value,
})


export const clearSearch = () => ({
    type:SEARCH_CLEAR
})