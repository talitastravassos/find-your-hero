import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHeroes } from "../../requests";
import InputField from "../../components/Input";
import styles from "./styles.module.scss";
import Result from "./containers/Result";

export default function Home() {
  const dispatch = useDispatch();
  const heroes = useSelector((state: any) => state.heroes);

  const onSearch = (search: string) => {
    if (search !== "") {
      dispatch(fetchHeroes(search));
    }
  };

  React.useEffect(() => {
    // console.log(heroes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroes]);

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <div>
          {/* <img
            src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/08/Marvel-Vs.-DC.jpg"
            alt=""
            width="750"
          /> */}
          <h1 className={styles.title}>Find Your Hero!</h1>

          <InputField label={"Search"} name={"search"} onChange={onSearch} />
        </div>
      </div>

      <Result />
    </div>
  );
}
