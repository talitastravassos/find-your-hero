import React from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import HeroCard from "../../../../components/HeroCard";
import { Hero } from "../../../../typings/hero.types";

export default function Result() {
  const search: Hero[] = useSelector((state: any) => state.heroes.searchHeroes);

  React.useEffect(() => {
    console.log(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className={styles.container}>
      {search.length > 0 && search[0].name !== '' ? (
        search.map((hero: Hero) => {
          return <HeroCard hero={hero} key={hero.id} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
}
