import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { cartReducer } from './cartReducer';
import {searchChangeReducer} from "./searchReducer";
import { menuReducer } from "./menuReducer";
import { sortChangeReducer } from "./sortReducer";

const rootReducer = history => combineReducers({
  cartReducer,
  searchChangeReducer,
  menuReducer,
  sortChangeReducer,
  router: connectRouter(history),
});

export default rootReducer;