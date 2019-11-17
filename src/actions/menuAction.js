// https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json


import * as types from '../constants'

export const menuAction = () => {
    return function(dispatch){
        dispatch({type:types.FETCH_MENU});
        return fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json',{method:'GET', headers:{
            'Content-Type': 'application/json'
          }}).then(data => data.json()).then(data => {
            dispatch({
                type: types.FETCH_MENU_SUCCESS,
                data
            })
        }).catch((err) => {
            dispatch({
                type: types.FETCH_MENU_ERROR,
                err,
            })
        })
    }
}