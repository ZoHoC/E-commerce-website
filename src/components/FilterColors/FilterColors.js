import styles from "./FilterColors.module.scss";
import Check from "@/../public/assets/icon/Check.svg";
import { useDispatch } from "react-redux";

const FilterColors = ({ color, colors, updateFilters }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles["Colors"]}>
      <h3 className={styles["Colors-Title"]}>colors</h3>
      <div className={styles["Colors-Container"]}>
        {colors.map((colorName, index) => {
          if (colorName === "all") {
            return (
              <button
                key="all"
                name="color"
                onClick={() => dispatch(updateFilters({ color: "all" }))}
                data-color="all"
                className={`${
                  color === "all"
                    ? `${styles["Colors-AllButton"]} ${styles["Colors-AllButton_active"]}`
                    : `${styles["Colors-AllButton"]}`
                }`}
              >
                All
              </button>
            );
          }
          return (
            <button
              key={index}
              name="color"
              onClick={() => dispatch(updateFilters({ color: colorName }))}
              data-color={colorName}
              className={`${
                color === colorName
                  ? `${styles["Colors-Button"]} ${styles["Colors-Button_active"]}`
                  : `${styles["Colors-Button"]}`
              }`}
              style={{ background: colorName }}
            >
              {color === colorName ? <Check /> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterColors;
