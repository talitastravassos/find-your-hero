import React from "react";
import styles from "./styles.module.scss";

interface Props {
  hero: any;
}

export default function HeroCard({ hero }: Props) {
  return (
    <div className={styles.card}>
      <h3>{hero.name}</h3>
    </div>
  );
}
