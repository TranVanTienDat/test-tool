import React from "react";
import { Button } from "../../Button/Button";
import styles from "./TopBar.module.css";

export const TopBar: React.FC = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        {/* Placeholder for Logo */}
        <span>Ninzaco</span>
      </div>

      <div className={styles.menu}>
        <a href="#" className={styles.link}>
          Home
        </a>
        <a href="#" className={styles.link}>
          Features
        </a>
        <a href="#" className={styles.link}>
          Pricing
        </a>
        <a href="#" className={styles.link}>
          Blog
        </a>
      </div>

      <div className={styles.actions}>
        <Button variant="ghost">Search</Button>
        <Button variant="ghost">Cart</Button>
        <Button variant="login">Log in</Button>
      </div>
    </nav>
  );
};
