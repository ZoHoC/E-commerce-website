import { useDispatch } from "react-redux";
import styles from "./FilterSearchBar.module.scss";

const FilterSearchBar = ({ text, updateFilters }) => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      name="text"
      placeholder="search"
      className={styles["FilterSearchBar"]}
      value={text}
      onChange={e =>
        dispatch(updateFilters({ text: e.target.value.toLowerCase().trim() }))
      }
    />
  );
};

export default FilterSearchBar;
