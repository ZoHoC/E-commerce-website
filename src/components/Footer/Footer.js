import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["Footer"]}>
      <p className={styles["Footer-Copywrite"]}>
        &copy; 2023
        <span className={styles["Footer-Logo"]}>ComfySloth</span>
        <span className={styles["Footer-Rights_block"]}>
          All rights reserved
        </span>
      </p>
    </footer>
  );
};

export default Footer;
