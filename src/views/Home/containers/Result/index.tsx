import React from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import HeroCard from "../../../../components/HeroCard";

export default function Result() {
  const search = useSelector((state: any) => state.heroes.searchHeroes);

  React.useEffect(() => {
    console.log(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className={styles.container}>
      {search.length > 0 ? (
        search.map((hero: any) => {
          return <HeroCard hero={hero} key={hero.id} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
}
