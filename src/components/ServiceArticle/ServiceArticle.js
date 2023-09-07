import styles from "./ServiceArticle.module.scss";

const ServiceArticle = ({ uniqueKey, icon, title, text }) => {
  return (
    <article key={uniqueKey} className={styles["ServiceArticle"]}>
      <div className={styles["ServiceArticle-Icon"]}>{icon}</div>
      <h3 className={styles["ServiceArticle-Title"]}>{title}</h3>
      <p className={styles["ServiceArticle-Description"]}>{text}</p>
    </article>
  );
};

export default ServiceArticle;
