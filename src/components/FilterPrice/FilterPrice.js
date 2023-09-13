import styles from "./FilterPrice.module.scss";
import { formatPrice } from "@/utility/formatPrice";
import { useDispatch } from "react-redux";

const FilterPrice = ({ price, maxPrice, updateFilters }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles["FilterPrice"]}>
      <h3 className={styles["FilterPrice-Title"]}>price</h3>
      <p className={styles["FilterPrice-Price"]}>{formatPrice(price)}</p>
      <input
        className={styles["FilterPrice-Input"]}
        type="range"
        name="price"
        min={0}
        max={maxPrice}
        onChange={e =>
          dispatch(updateFilters({ price: parseInt(e.target.value) }))
        }
        value={price}
      />
    </div>
  );
};

export default FilterPrice;
