import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getHero } from "../../requests";
import { Hero } from "../../typings/hero.types";
import styles from "./styles.module.scss";

interface Props {
  hero: Hero;
}

export default function HeroCard({ hero }: Props) {
  const dispatch = useDispatch();

  return (
    <Link
      to={{
        pathname: `/details/${hero.name.replace(/\s/g, "").toLowerCase()}`,
      }}
      style={{ textDecoration: "none" }}
    >
      <div className={styles.card} onClick={() => dispatch(getHero(hero.id))}>
        <img src={hero.image.url} alt={hero.name} height='350' />
        <div className={styles.info_container}>
          <h3>{hero.name}</h3>
        </div>
      </div>
    </Link>
  );
}
