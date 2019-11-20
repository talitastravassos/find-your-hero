import React from "react";
import styles from "./styles.module.scss";

interface Props {
  hero: any;
}

export default function HeroCard({ hero }: Props) {
  return (
    <div className={styles.card}>
      <img src={hero.image.url} alt={hero.name} height="350" />
      <div className={styles.info_container}>
        <h3>{hero.name}</h3>
      </div>
    </div>
  );
}
