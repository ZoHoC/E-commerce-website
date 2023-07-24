import Link from "next/link";
import styles from "./Navbar.module.scss";
import CartIcon from "../../../public/assets/icon/CartIcon.svg";

const Navbar = () => {
  return (
    <nav className={styles["Navbar"]}>
      <Link className={styles["Navbar-Link"]} href="/">
        Home
      </Link>
      <Link className={styles["Navbar-Link"]} href="/about">
        About
      </Link>
      <Link className={styles["Navbar-Link"]} href="/products">
        Products
      </Link>
      <Link className={styles["Navbar-Cart"]} href="/cart">
        Cart
        <div className={styles["Navbar-Icon"]}>
          <CartIcon />
          <div className={styles["Navbar-Value"]}>8</div>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
