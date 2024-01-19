import { configureStore } from '@reduxjs/toolkit';
import itemListReducer from './itemList/ItemListSlice';

export const store = configureStore({
  reducer: {
    itemList: itemListReducer
  }
});
