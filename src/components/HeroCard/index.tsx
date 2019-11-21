import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

interface Props {
  hero: any;
}

export default function HeroCard({ hero }: Props) {
  return (
    <Link
      to={{ pathname: `/details/${hero.name}`, state: { _id: `${hero.id}` } }}
      style={{ textDecoration: "none" }}
    >
      <div className={styles.card}>
        <img src={hero.image.url} alt={hero.name} height="350" />
        <div className={styles.info_container}>
          <h3>{hero.name}</h3>
        </div>
      </div>
    </Link>
  );
}
