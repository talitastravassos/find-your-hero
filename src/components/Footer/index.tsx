// Footer Component
import React from "react";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p>
          <strong>Find Your Hero</strong> by{" "}
          <a href="https://github.com/talitastravassos">Talita S. Travassos</a>.
        </p>
    </footer>
  );
}
