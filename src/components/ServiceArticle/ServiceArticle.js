import styles from "./ServiceArticle.module.scss";

const ServiceArticle = ({ icon, title, text }) => {
  return (
    <article className={styles["ServiceArticle"]}>
      <div className={styles["ServiceArticle-Icon"]}>{icon}</div>
      <h3 className={styles["ServiceArticle-Title"]}>{title}</h3>
      <p className={styles["ServiceArticle-Description"]}>{text}</p>
    </article>
  );
};

export default ServiceArticle;
