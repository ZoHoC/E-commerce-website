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
  gridView: true,
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
    toggleGridView: state => {
      state.gridView = !state.gridView;
    },
  },
});

export const { updateFilters, clearFilters, setSortBy, toggleGridView } =
  filtersSlice.actions;
export default filtersSlice.reducer;
