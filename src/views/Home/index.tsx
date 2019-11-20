import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHeroes } from "../../requests";
// import styles from "./styles.module.scss"

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector( (state: any) => state.heroes)

  React.useEffect(() => {
    dispatch(fetchHeroes("wonder"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    console.log(users)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find Your Hero App!</h1>
      </header>
    </div>
  );
};
