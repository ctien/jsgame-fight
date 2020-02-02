import * as types from './types';
import { combineReducers } from 'redux';

const listReducer = (state = null, { type, payload }) => {
  switch (type) {
    case types.FETCH_LIST_COMPLETED:
      return [...payload];
    default:
      return state;
  }
};

const detailsReducer = (state = null, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  details: detailsReducer,
  list: listReducer
});
