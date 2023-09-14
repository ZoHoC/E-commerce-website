import { mockDB } from "@/utility/mockDB";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: mockDB,
  text: "",
  category: "all",
  company: "",
  color: "all",
  price: 0,
  shipping: false,
  sortBy: "price-lowest",
  view: true,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearFilters: state => {
      return initialState;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    toggleView: state => {
      state.view = !state.view;
    },
  },
});

export const { updateFilters, clearFilters, setSortBy, toggleView } =
  filtersSlice.actions;
export default filtersSlice.reducer;
