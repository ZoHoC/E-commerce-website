import styles from "./AboutUs.module.scss";

import Image from "next/image";
import landingRoom from "@/../public/assets/images/landingRoom.jpeg";

const AboutUs = () => {
  return (
    <section className={styles["AboutUS"]}>
      <div className={styles["AboutUS-Inner"]}>
        <Image
          className={styles["AboutUS-RoomImg"]}
          src={landingRoom}
          alt="nice room"
          placeholder="blur"
        />
        <div className={styles["AboutUS-Container"]}>
          <h1 className={styles["AboutUS-Title"]}>Our Story</h1>
          <div className={styles["AboutUS-Underline"]}></div>
          <p className={styles["AboutUS-Description"]}>
            This is an e-commerce application listing a range of furniture
            products for home & office. The products can be filtered on the
            basis of their Category, Company, Colour, Price & Shipping Charges.
            The products can be added to the cart and then proceeded to
            checkout.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
