import styles from "./Landing.module.scss";
import Image from "next/image";
import landingRoom from "@/../public/assets/images/landingRoom.jpeg";
import landingWork from "@/../public/assets/images/landingWork.jpeg";
import Button from "../Button/Buttton";
import Link from "next/link";

export default function Landing() {
  return (
    <section className={styles["Landing"]}>
      <div className={styles["Landing-Inner"]}>
        <div className={styles["Landing-Wrapper"]}>
          <h1 className={styles["Landing-Title"]}>
            design your
            <span className={styles["Landing-Title_block"]}> comfort zone</span>
          </h1>
          <p className={styles["Landing-Subtitle"]}>
            This is an e-commerce application listing a range of furniture
            products for home & office. The products can be filtered on the
            basis of their Category, Company, Colour, Price & Shipping Charges.
            The products can be added to the cart and then proceeded to the
            checkout. The checkout is integrated with Stripe Payment.
          </p>
          <Link href={"/products"} className={styles["Landing-Button"]}>
            <Button>shop now</Button>
          </Link>
        </div>
        <div
          className={`${styles["Landing-Wrapper"]} ${styles["Landing-Wrapper_display"]}`}
        >
          <Image
            className={styles["Landing-RoomImg"]}
            src={landingRoom}
            alt="nice room"
            placeholder="blur"
          />
          <Image
            className={styles["Landing-WorkImg"]}
            src={landingWork}
            alt="person working"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}
