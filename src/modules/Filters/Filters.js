"use client";

import styles from "./Filters.module.scss";

import { useDispatch, useSelector } from "react-redux";

import {
  updateFilters,
  clearFilters,
  setSortBy,
  toggleGridView,
} from "@/redux/reducer/filtersReducer";

import { getUniqueValues } from "@/utility/getUniqueValues";
import FilterSearchBar from "@/components/FilterSearchBar/FilterSearchBar";
import FilterCategory from "@/components/FilterCategory/FilterCategory";
import FilterCompany from "@/components/FilterCompany/FilterCompany";
import FilterColors from "@/components/FilterColors/FilterColors";
import FilterPrice from "@/components/FilterPrice/FilterPrice";
import FilterShipping from "@/components/FilterShipping/FilterShipping";
import Button from "@/components/Button/Buttton";

const Filters = () => {
  const { products, text, category, company, color, price, shipping } =
    useSelector(state => state.filters);
  const dispatch = useDispatch();

  const categories = getUniqueValues(products, "category");
  const companies = getUniqueValues(products, "company");
  const colors = getUniqueValues(products, "colors");
  const maxPrice = products.reduce((max, product) => {
    return product.price > max ? product.price : max;
  }, 0);

  return (
    <aside className={styles["Filters"]}>
      <FilterSearchBar text={text} updateFilters={updateFilters} />
      <FilterCategory
        category={category}
        categories={categories}
        updateFilters={updateFilters}
      />
      <FilterCompany
        company={company}
        companies={companies}
        updateFilters={updateFilters}
      />
      <FilterColors
        color={color}
        colors={colors}
        updateFilters={updateFilters}
      />
      <FilterPrice
        price={price}
        maxPrice={maxPrice}
        updateFilters={updateFilters}
      />
      <FilterShipping shipping={shipping} updateFilters={updateFilters} />

      <Button isTertiary handleClick={() => dispatch(clearFilters())}>
        Clear Filters
      </Button>
    </aside>
  );
};

export default Filters;
