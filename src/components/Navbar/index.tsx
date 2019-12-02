import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar_container}>
        <img
          src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/08/Marvel-Vs.-DC.jpg"
          alt="heroes"
          className={styles.image}
        />
        <div className={styles.text_container}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className={styles.title}>Find Your Hero!</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
