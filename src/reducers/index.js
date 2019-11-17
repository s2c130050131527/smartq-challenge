import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { cartReducer } from './cartReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  cartReducer
});

export default rootReducer;