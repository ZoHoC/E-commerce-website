import styles from "./Button.module.scss";

const Button = ({
  isSecondary = false,
  isTertiary = false,
  handleClick,
  children,
}) => {
  let modifierClass = styles["Button"];

  switch (true) {
    case isSecondary:
      modifierClass = `${styles["Button"]} ${styles["Button_secondary"]}`;
      break;
    case isTertiary:
      modifierClass = `${styles["Button"]} ${styles["Button_tertiary"]}`;
      break;
    default:
      modifierClass;
      break;
  }

  return (
    <button className={modifierClass} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
