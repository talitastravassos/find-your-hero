import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Hero } from "../../typings/hero.types";
import styles from "./styles.module.scss";

export default function Details() {
  const hero: Hero = useSelector((state: any) => state.heroes.selectHero);

  React.useEffect(() => {
    // eslint-disable-next-line
    console.log(hero);
  }, [hero]);

  return (
    <div className={styles.container}>
      <Navbar />

      {hero.image ? (
        <div className={styles.container_details}>
          <img src={hero.image.url} alt={hero.name} className={styles.image} />
          <div className={styles.container_info}>
            <h1>{hero.name}</h1>
            <div>
              <h3>Appearance</h3>
              <p>
                Eye color: {hero.appearance["eye-color"]} | Gender:{" "}
                {hero.appearance["gender"]} | Hair color:{" "}
                {hero.appearance["hair-color"]} | Height:{" "}
                {hero.appearance["height"][0]} | Weight:{" "}
                {hero.appearance["weight"][0]}
              </p>
            </div>
            <div className={styles.biography}>
              <h3>Biography</h3>
              <p>Full Name: {hero.biography["full-name"]}</p>
              <p>Publisher: {hero.biography["publisher"]}</p>
              <p>Alignment: {hero.biography["alignment"]}</p>
              <p>Alter egos: {hero.biography["alter-egos"]}</p>
              <p>First appearance: {hero.biography["first-appearance"]}</p>
              <p>Place of birth: {hero.biography["place-of-birth"]}</p>
            </div>
            <div className={styles.biography}>
              <h3>Powerstats</h3>
              <p>
                Combat: {hero.powerstats["combat"]} | Durability:{" "}
                {hero.powerstats["durability"]} | Intelligence:{" "}
                {hero.powerstats["intelligence"]} | Power:{" "}
                {hero.powerstats["power"]} | Speed: {hero.powerstats["speed"]}|
                Strength: {hero.powerstats["strength"]}
              </p>
            </div>
            <div className={styles.biography}>
              <h3>Connections</h3>
              <p>Group affiliation: {hero.connections["group-affiliation"]}</p>
              <p>Relatives: {hero.connections["relatives"]}</p>
            </div>
            <div className={styles.biography}>
              <h3>Work</h3>
              <p>Base: {hero.work["base"]}</p>
              <p>Occupation: {hero.work["occupation"]}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <Footer />
    </div>
  );
}
