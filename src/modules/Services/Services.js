import ServiceArticle from "../../components/ServiceArticle/ServiceArticle";
import styles from "./Services.module.scss";
import { services } from "@/utility/serviceData";

const Services = () => {
  return (
    <div className={styles["Services"]}>
      <div className={styles["Services-Wrapper"]}>
        <h2 className={styles["Services-Title"]}>
          Custom Furniture{" "}
          <span className={styles["Services-Title_block"]}>
            Built Only For You
          </span>
        </h2>
        <p className={styles["Services-Subtitle"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          quisquam saepe id reiciendis sunt, repudiandae libero amet rem quia
          quod?
        </p>
      </div>

      <div className={styles["Services-Grid"]}>
        {services.map(service => {
          const { id, icon, title, text } = service;
          return (
            <ServiceArticle key={id} icon={icon} title={title} text={text} />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
