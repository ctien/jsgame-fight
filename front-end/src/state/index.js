import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './modules';
import { createLogger, apiService } from './middlewares';

function configureStore(initialState) {
  const rootReducer = combineReducers(reducers);

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(apiService, thunkMiddleware, createLogger(true))
  );
}

export default configureStore;
