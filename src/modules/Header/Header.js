"use client";
import { useState } from "react";

import styles from "./Header.module.scss";

import Logo from "@/../public/assets/icon/Logo.svg";
import Navbar from "@/components/Navbar/Navbar";
import { Squash as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={styles["Header"]}>
      <div className={styles["Header-Inner"]}>
        <div className={styles["Header-Logo"]}>
          <Logo />
        </div>
        <div className={styles["Header-Menu"]}>
          <Hamburger
            size={24}
            color={"hsl(22, 31%, 52%)"}
            toggled={isOpen}
            toggle={setOpen}
            rounded
            hideOutline={false}
          />
        </div>
        <div
          className={`${styles["Header-Navbar"]} ${
            isOpen && styles["Header-Navbar_active"]
          }`}
        >
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
