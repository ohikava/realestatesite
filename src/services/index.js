import reducer from './root';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ['buyrent']
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default function initializeStore() {
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { store, persistor };
};
