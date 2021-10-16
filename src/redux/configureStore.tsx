import { createStore } from 'redux';
import storage from 'redux-persist/es/storage';
import { persistStore, persistCombineReducers } from 'redux-persist';
//
import { boardTypeReducer } from './reducers/boardTypeReducer';

const config = {
  key: 'root',
  storage,
  debug: true
};

export const ConfigureStore = () => {
  const store = createStore(
    persistCombineReducers(config, {
      boardType: boardTypeReducer
    })
  );

  const persistor = persistStore(store);

  return { persistor, store };
};
