import styles from "./ProductCard.module.scss";
import Image from "next/image";
import { formatPrice } from "@/utility/formatPrice";
import Button from "../Button/Buttton";
import MagnifyingGlass from "@/../public/assets/icon/MagnifyingGlass.svg";

const ProductCard = ({ id, name, image, price, description, view }) => {
  return (
    <article
      className={`${styles["ProductCard"]} ${
        !view && styles["ProductCard_list"]
      }`}
    >
      <div className={styles["ProductCard-Container"]}>
        <Image
          src={image}
          width={800}
          height={400}
          alt={name}
          className={styles["ProductCard-Image"]}
        />
        {view && (
          <div className={styles["ProductCard-Link"]}>
            <MagnifyingGlass />
          </div>
        )}
      </div>

      {view ? (
        <header
          className={`${styles["ProductCard-Header"]} ${styles["ProductCard-Header_grid"]}`}
        >
          <h2 className={styles["ProductCard-Title"]}>{name}</h2>
          <p className={styles["ProductCard-Price"]}>{formatPrice(price)}</p>
        </header>
      ) : (
        <div className={styles["ProductCard-Wrapper"]}>
          <header className={styles["ProductCard-Header"]}>
            <h2
              className={`${styles["ProductCard-Title"]} ${styles["ProductCard-Title_list"]}`}
            >
              {name}
            </h2>
            <p
              className={`${styles["ProductCard-Price"]} ${styles["ProductCard-Price_list"]}`}
            >
              {formatPrice(price)}
            </p>
          </header>

          <p className={styles["ProductCard-Description"]}>
            {description.substring(0, 150)}...
          </p>

          <div className={styles["ProductCard-Button"]}>
            <Button isQuaternary>details</Button>
          </div>
        </div>
      )}
    </article>
  );
};

export default ProductCard;
