import styles from "./FilterCompany.module.scss";

import { useDispatch } from "react-redux";

const FilterCompany = ({ company, companies, updateFilters }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles["Company"]}>
      <h3 className={styles["Company-Title"]}>company</h3>
      <select
        name="company"
        value={company}
        onChange={e => dispatch(updateFilters({ company: e.target.value }))}
        className={styles["Company-Select"]}
      >
        {companies.map((companyName, index) => (
          <option key={index} value={companyName}>
            {companyName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCompany;
