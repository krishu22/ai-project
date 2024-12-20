// redux/historySlice.js

import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of history
const initialState = {
  history: [],
};

// Create a Redux slice
const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    // Action to add an item to the history
    addHistoryItem(state, action) {
      state.history.push(action.payload);
    },
    // Action to remove an item from history (optional)
    removeHistoryItem(state, action) {
      state.history = state.history.filter(
        (item, index) => index !== action.payload
      );
    },
    // Action to clear all history items
    clearHistory(state) {
      state.history = [];
    },
  },
});

// Export actions to be used by components
export const { addHistoryItem, removeHistoryItem, clearHistory } = historySlice.actions;

// Export the reducer to be used in the store
export default historySlice.reducer;