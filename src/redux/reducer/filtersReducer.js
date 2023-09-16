import { mockDB } from "@/utility/mockDB";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: mockDB,
  text: "",
  category: "all",
  company: "all",
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
    // getProducts: (state, action) => {
    //   state.products = action.payload;
    // },
    updateFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearFilters: state => {
      return { ...initialState, products: state.products };
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    toggleView: state => {
      state.view = !state.view;
    },
  },
});

export const {
  getProducts,
  updateFilters,
  clearFilters,
  setSortBy,
  toggleView,
} = filtersSlice.actions;
export default filtersSlice.reducer;
