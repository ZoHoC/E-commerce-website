import Button from "../Button/Buttton";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles["Contact"]}>
      <h2 className={styles["Contact-Title"]}>
        Join our newsletter and get 20% off
      </h2>
      <div className={styles["Contact-Wrapper"]}>
        <p className={styles["Contact-Description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam
          repudiandae vel ab id, fuga praesentium nobis natus ipsam vero?
        </p>
        <div className={styles["Contact-Form"]}>
          <input
            type="text"
            className={styles["Contact-Input"]}
            placeholder="Enter email"
          />
          <div className={styles["Contact-Button"]}>
            <Button isSecondary>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
