import styles from "./FilterCategory.module.scss";
import { useDispatch } from "react-redux";

const FilterCategory = ({ category, categories, updateFilters }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles["Category"]}>
      <h3 className={styles["Category-Title"]}>category</h3>
      <div className={styles["Category-Container"]}>
        {categories.map((categoryName, index) => (
          <button
            key={index}
            onClick={() => dispatch(updateFilters({ category: categoryName }))}
            name="category"
            className={`${
              category === categoryName.toLowerCase()
                ? `${styles["Category-Button"]} ${styles["Category-Button_active"]}`
                : `${styles["Category-Button"]}`
            }`}
          >
            {categoryName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterCategory;
