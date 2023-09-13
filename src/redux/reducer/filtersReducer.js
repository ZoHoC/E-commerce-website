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
  view: { gridView: true, listView: false },
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
      // Toggle both gridView and listView
      state.view.gridView = !state.view.gridView;
      state.view.listView = !state.view.gridView; // Set listView to the opposite of gridView
    },
  },
});

export const { updateFilters, clearFilters, setSortBy, toggleView } =
  filtersSlice.actions;
export default filtersSlice.reducer;
