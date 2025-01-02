// redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "../slices/historySlice"; // Import the history slice

const store = configureStore({
  reducer: {
    history: historyReducer,
  },
});

export default store;