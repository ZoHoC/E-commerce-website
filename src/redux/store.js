"use client";

import filtersReducer from "./reducer/filtersReducer";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  filters: filtersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
