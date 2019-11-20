import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHeroes } from "../../requests";
import InputField from "../../components/Input";
// import styles from "./styles.module.scss"

export default function Home() {
  const dispatch = useDispatch();
  const heroes = useSelector( (state: any) => state.heroes)

  const onSearch = (search: string) => {
    dispatch(fetchHeroes(search));
  }

  React.useEffect(() => {
    console.log(heroes)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroes]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find Your Hero App!</h1>
        <InputField label={"Search"} name={'search'} onChange={onSearch}/>
      </header>
    </div>
  );
};
