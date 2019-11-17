import { SORT_CHANGE, SORT_CLEAR } from '../constants';
export const sortChange = value => {
  return {
    type: SORT_CHANGE,
    value
  };
};

export const sortClear = () => {
  return {
    type: SORT_CLEAR
  };
};
