import React from "react";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getHero } from "../../requests";
// import styles from "./styles.module.scss";

export default function Details(props: RouteComponentProps) {
  const dispatch = useDispatch();
  const hero = useSelector((state: any) => state.heroes.selectHero);

  React.useEffect(() => {
    const { _id } = props.location.state  
    // console.log(props);

    dispatch(getHero(_id));
    // eslint-disable-next-line
  }, []);
  
  
  React.useEffect(() => {
      // eslint-disable-next-line
      console.log(hero)
  }, [hero]);


  return (
    <div>
      <h1>Hero Details</h1>
    </div>
  );
}
