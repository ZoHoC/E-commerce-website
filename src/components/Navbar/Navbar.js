import styles from "./Navbar.module.scss";

import { usePathname } from "next/navigation";
import Link from "next/link";
import CartIcon from "../../../public/assets/icon/CartIcon.svg";

const Navbar = () => {
  const pathname = usePathname();

  const isCurrentPage = href => pathname === href;

  return (
    <nav className={styles["Navbar"]}>
      <Link
        className={`${styles["Navbar-Link"]} ${
          isCurrentPage("/") ? styles["Navbar-Link_current"] : ""
        }`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles["Navbar-Link"]} ${
          isCurrentPage("/about") ? styles["Navbar-Link_current"] : ""
        }`}
        href="/about"
      >
        About
      </Link>
      <Link
        className={`${styles["Navbar-Link"]} ${
          isCurrentPage("/products") ? styles["Navbar-Link_current"] : ""
        }`}
        href="/products"
      >
        Products
      </Link>
      <Link
        className={`${styles["Navbar-Cart"]} ${
          isCurrentPage("/cart") ? styles["Navbar-Link_current"] : ""
        }`}
        href="/cart"
      >
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
