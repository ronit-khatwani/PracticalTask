import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import ticketReducer from '../features/tickets/ticketSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, ticketReducer);

export const store = configureStore({
  reducer: {
    tickets: persistedReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
