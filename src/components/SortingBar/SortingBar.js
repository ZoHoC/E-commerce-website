"use client";
import styles from "./SortingBar.module.scss";

import GridIcon from "@/../public/assets/icon/GridIcon.svg";
import ListIcon from "@/../public/assets/icon/ListIcon.svg";
import { setSortBy, toggleView } from "@/redux/reducer/filtersReducer";

import { useDispatch, useSelector } from "react-redux";

const SortingBar = () => {
  const {
    products,
    sortBy,
    view: { gridView, listView },
  } = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const handleGridViewClick = () => !gridView && dispatch(toggleView());

  const handleListViewClick = () => gridView && dispatch(toggleView());

  return (
    <aside className={styles["SortingBar"]}>
      <div className={styles["SortingBar-Wrapper"]}>
        <button
          className={`${
            gridView
              ? `${styles["SortingBar-Button"]} ${styles["SortingBar-Button_active"]}`
              : styles["SortingBar-Button"]
          }`}
          onClick={handleGridViewClick}
        >
          <GridIcon />
        </button>
        <button
          className={`${
            listView
              ? `${styles["SortingBar-Button"]} ${styles["SortingBar-Button_active"]}`
              : styles["SortingBar-Button"]
          }`}
          onClick={handleListViewClick}
        >
          <ListIcon />
        </button>
      </div>
      <p className={styles["SortingBar-Found"]}>
        {products.length} products found
      </p>
      <hr className={styles["SortingBar-Line"]} />
      <div className={styles["SortingBar-Wrapper"]}>
        <label htmlFor="sort" className={styles["SortingBar-Label"]}>
          sort by
        </label>
        <select
          name="sort"
          id="sort"
          className={styles["SortingBar-Select"]}
          value={sortBy}
          onChange={e => dispatch(setSortBy(e.target.value))}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </div>
    </aside>
  );
};

export default SortingBar;
