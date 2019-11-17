import { CART_ADD, CART_CLEAR, CART_REMOVE } from '../constants';
const INITIAL_STATE = {};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ADD: {
      console.log(state[action.value]);
      if (state[action.value]) {
        return {
          ...state,
          [action.value]: state[action.value] + 1
        };
      } else {
        return {
          ...state,
          [action.value]: 1
        };
      }
    }
    case CART_REMOVE: {
      if (state[action.value]) {
        return {
          ...state,
          [action.value]: state[action.value] - 1
        };
      }
      break;
    }
    case CART_CLEAR: {
      return {};
    }
    default:
      return state;
  }
};
