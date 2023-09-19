"use client";
import Button from "../Button/Buttton";
import styles from "./SingleProduct.module.scss";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/utility/formatPrice";
import { useState } from "react";

import FullStar from "@/../public/assets/icon/FullStar.svg";
import HalfStar from "@/../public/assets/icon/HalfStar.svg";
import EmptyStar from "@/../public/assets/icon/EmptyStar.svg";
import Check from "@/../public/assets/icon/Check.svg";

const SingleProduct = ({
  id,
  stock,
  price,
  colors,
  images,
  reviews,
  stars,
  name,
  description,
  company,
}) => {
  const [mainImage, setMainImage] = useState(images[0].url);
  const [mainColor, setMainColor] = useState(colors[0]);
  const starGrade = Array.from({ length: 5 }, (_, index) => {
    return stars >= index + 1 ? (
      <FullStar key={index} />
    ) : stars >= index + 0.5 ? (
      <HalfStar key={index} />
    ) : (
      <EmptyStar key={index} />
    );
  });

  return (
    <div className={styles["SingleProduct"]}>
      <Link href={"/products"} className={styles["SingleProduct-Link"]}>
        <Button>back to products</Button>
      </Link>
      <div className={styles["SingleProduct-Container"]}>
        <div className={styles["SingleProduct-ImagesContainer"]}>
          <Image
            src={mainImage}
            width={800}
            height={600}
            alt={name}
            className={styles["SingleProduct-Image"]}
          />
          <div className={styles["SingleProduct-Gallery"]}>
            {images.map((image, index) => (
              <Image
                width={800}
                height={400}
                src={image.url}
                alt={image.filename}
                key={index}
                onClick={() => setMainImage(images[index].url)}
                className={`${styles["SingleProduct-GalleryImage"]} ${
                  image.url === mainImage
                    ? styles["SingleProduct-GalleryImage_active"]
                    : ""
                }`}
              />
            ))}
          </div>
        </div>
        <div className={styles["SingleProduct-Content"]}>
          <h1 className={styles["SingleProduct-Title"]}>{name}</h1>
          <div className={styles["SingleProduct-Review"]}>
            <div className={styles["SingleProduct-Stars"]}>{starGrade}</div>
            <p className={styles["SingleProduct-Customer"]}>
              ({reviews} customer reviews)
            </p>
          </div>
          <p className={styles["SingleProduct-Price"]}>{formatPrice(price)}</p>
          <p className={styles["SingleProduct-Description"]}>{description}</p>
          <p className={styles["SingleProduct-Info"]}>
            Available :<span>{stock > 0 ? "In stock" : "out of stock"}</span>
          </p>
          <p className={styles["SingleProduct-Info"]}>
            SKU :<span>{id}</span>
          </p>
          <p className={styles["SingleProduct-Info"]}>
            Brand :<span>{company}</span>
          </p>
          <p className={styles["SingleProduct-Info"]}>
            Colors :
            <span>
              {colors.map((color, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: color }}
                  className={`${styles["SingleProduct-ColorBtn"]} ${
                    mainColor === color
                      ? styles["SingleProduct-ColorBtn_active"]
                      : ""
                  }`}
                  onClick={() => setMainColor(color)}
                >
                  {mainColor === color ? <Check /> : null}
                </button>
              ))}
            </span>
          </p>
          <hr className={styles["SingleProduct-Line"]} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
