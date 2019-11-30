import React from "react";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getHero } from "../../requests";
import styles from "./styles.module.scss";
import { Hero } from "../../typings/hero.types";
import Footer from "../../components/Footer";

export default function Details(props: RouteComponentProps) {
  const dispatch = useDispatch();
  const hero: Hero = useSelector((state: any) => state.heroes.selectHero);

  React.useEffect(() => {
    const { _id } = props.location.state;

    dispatch(getHero(_id));
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    // eslint-disable-next-line
    console.log(hero);
  }, [hero]);

  return (
    <div className={styles.container}>
      
        {hero.image ? (
          <div className={styles.container_details}>
            <img
              src={hero.image.url}
              alt={hero.name}
              className={styles.image}
            />
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
                  {hero.powerstats["power"]} | Speed: {hero.powerstats["speed"]}
                  | Strength: {hero.powerstats["strength"]}
                </p>
              </div>
              <div className={styles.biography}>
                <h3>Connections</h3>
                <p>
                  Group affiliation: {hero.connections["group-affiliation"]}
                </p>
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
