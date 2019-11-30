import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchSearch } from "../../requests";
import InputField from "../../components/Input";
import styles from "./styles.module.scss";
import Result from "./containers/Result";
import { Hero } from "../../typings/hero.types";

export default function Home() {
  const dispatch = useDispatch();
  const heroes: Hero[] = useSelector((state: any) => state.heroes.searchHeroes);
  const [loading, setLoading] = React.useState(false);

  const onSearch = (search: string) => {
    if (search !== "") {
      setLoading(true);
      dispatch(fetchSearch(search));
    }
  };

  React.useEffect(() => {
    console.log(heroes);
    if (heroes.length > 0) {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroes]);

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <img
          src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/08/Marvel-Vs.-DC.jpg"
          alt=""
          // width="850"
          className={styles.image}
        />
        <div className={styles.text_container}>
          <h1 className={styles.title}>Find Your Hero!</h1>

          <InputField
            label={"Search for your fave superhero!"}
            name={"search"}
            onChange={onSearch}
          />
        </div>
      </div>

      {!loading ? (
        <Result />
      ) : (
        <div className={styles.container_loader}>
          <Loader type="RevolvingDot" color="blue" height={150} width={150} />
        </div>
      )}
    </div>
  );
}
