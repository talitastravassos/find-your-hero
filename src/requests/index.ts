import axios from "axios";
import { searchHeroes, fetchHero } from "./../store/actions";

const request = axios.create({
  baseURL: "https://superheroapi.com/api.php/102515951144403/"
});

export const fetchSearch = (search: string) => {
  return (dispatch: any) => {
    request
      .get(`search/${search}`)
      .then(res => {
        // console.log(res);
        if (res.data.response === "success") {
          dispatch(searchHeroes(res.data.results));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getHero = (id: string) => {
  return (dispatch: any) => {
    request
      .get(`${id}`)
      .then(res => {
        // console.log(res);
        if (res.data.response === "success") {
          dispatch(fetchHero(res.data));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};
