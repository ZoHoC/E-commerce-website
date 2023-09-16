"use client";
import SortingBar from "@/components/SortingBar/SortingBar";
import Filters from "../Filters/Filters";
import styles from "./ProductGrid.module.scss";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { getFilteredProducts } from "@/redux/selector/getFilteredProducts";

const ProductGrid = () => {
  const { view } = useSelector(state => state.filters);
  const filteredProducts = useSelector(getFilteredProducts);

  const gridClass = view
    ? styles["ProductGrid-Grid"]
    : styles["ProductGrid-List"];

  return (
    <div className={styles["ProductGrid"]}>
      <Filters />
      <div className={gridClass}>
        <div className={styles["ProductGrid-SortingBar"]}>
          <SortingBar />
        </div>
        {filteredProducts.length === 0 && (
          <div className={styles["ProductGrid-NoProducts"]}>
            Sorry, no products matched your search...
          </div>
        )}
        {filteredProducts.map(({ id, name, price, description, image }) => (
          <ProductCard
            key={id}
            id={id}
            name={name}
            price={price}
            description={description}
            image={image}
            view={view}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
