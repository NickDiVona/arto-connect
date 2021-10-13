import { createStore, combineReducers } from 'redux';
//
import { boardTypeReducer } from './reducers';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      boardType: boardTypeReducer
    })
  );

  return store;
};
