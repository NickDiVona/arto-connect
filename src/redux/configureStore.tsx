import { combineReducers, createStore } from "redux";
// import storage from 'redux-persist/es/storage';
// import { persistStore, persistCombineReducers } from 'redux-persist';
//
import { BoardTypeReducer, BoardTypeReducerTypes } from "./reducers/boardTypeReducer";
import { BoardSizeReducer, BoardSizeReducerTypes } from "./reducers/boardSizeReducer";
//

export interface RootStateTypes {
  boardSize: BoardSizeReducerTypes;
  boardType: BoardTypeReducerTypes;
}

// const config = {
//   key: 'root',
//   storage,
//   debug: true
// };

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      boardType: BoardTypeReducer,
      boardSize: BoardSizeReducer
    })
  );

  // const persistor = persistStore(store);

  // return { persistor, store };

  return store;
};
