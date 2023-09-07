import styles from "./Section.module.scss";

const Section = ({ isSecondary = false, isTertiary = false, children }) => {
  let modifierClass = styles["Section"];

  switch (true) {
    case isSecondary:
      modifierClass = `${styles["Section"]} ${styles["Section_secondary"]}`;
      break;
    case isTertiary:
      modifierClass = `${styles["Section"]} ${styles["Section_tertiary"]}`;
      break;
    default:
      modifierClass;
      break;
  }

  return (
    <section className={modifierClass}>
      <div className={styles["Section-Inner"]}>{children}</div>
    </section>
  );
};

export default Section;
