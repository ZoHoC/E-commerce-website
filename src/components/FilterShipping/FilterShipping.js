import styles from "./FilterShipping.module.scss";
import { useDispatch } from "react-redux";

const FilterShipping = ({ updateFilters, shipping }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles["FilterShipping"]}>
      <label htmlFor="shipping" className={styles["FilterShipping-Label"]}>
        free shipping
      </label>
      <input
        type="checkbox"
        name="shipping"
        className={styles["FilterShipping-Input"]}
        id="shipping"
        onChange={() => dispatch(updateFilters({ shipping: !shipping }))}
        checked={shipping}
      />
    </div>
  );
};

export default FilterShipping;
