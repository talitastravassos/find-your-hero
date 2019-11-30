import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { Hero } from "../../typings/hero.types";

interface Props {
  hero: Hero;
}

export default function HeroCard({ hero }: Props) {
  return (
    <Link
      to={{ pathname: `/details/${hero.name.replace(/\s/g, '').toLowerCase()}`, state: { _id: `${hero.id}` } }}
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
