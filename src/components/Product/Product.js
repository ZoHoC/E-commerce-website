import styles from "./Product.module.scss";

import Image from "next/image";

import { formatPrice } from "@/utility/formatPrice";
import MagnifyingGlass from "@/../public/assets/icon/MagnifyingGlass.svg";

const Product = ({ image, name, price, id }) => {
  return (
    <article className={styles["Product"]}>
      <div className={styles["Product-Container"]}>
        <Image
          src={image}
          width={800}
          height={400}
          alt={name}
          className={styles["Product-Image"]}
        />
        <div className={styles["Product-Link"]}>
          <MagnifyingGlass />
        </div>
      </div>
      <header className={styles["Product-Header"]}>
        <h3 className={styles["Product-Title"]}>{name}</h3>
        <p className={styles["Product-Price"]}>{formatPrice(price)}</p>
      </header>
    </article>
  );
};

export default Product;

// to={`/products/${id}`}
