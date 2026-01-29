import React from "react";
import { TopBar } from "../../../common/Navigation/TopBar";
import { Button } from "../../../common/Button/Button";
import styles from "./MainSection.module.css";

export const MainSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <TopBar />

      <div className={styles.heroContent}>
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>
            Discover the Best <br />
            <span className={styles.highlight}>Deals & Offers</span>
          </h1>
          <p className={styles.description}>
            Shop the latest trends and get exclusive discounts on your favorite
            brands.
          </p>
          <div className={styles.heroActions}>
            <Button variant="offer" size="large">
              Get 50% Off
            </Button>
            <Button variant="secondary" size="large">
              Explore Now
            </Button>
          </div>
        </div>

        <div className={styles.rightColumn}>
          {/* Placeholder for Hero Image */}
          <div className={styles.imagePlaceholder}>Hero Image</div>
        </div>
      </div>
    </section>
  );
};
