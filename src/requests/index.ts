import axios from "axios";
import { getHeroes } from "./../store/actions";

const request = axios.create({
  baseURL:
    "https://superheroapi.com/api.php/102515951144403/search/"
});

export const fetchHeroes = (search: string) => {
  return (dispatch: any) => {
    request
      .get(`${search}`)
      .then(res => {
        // console.log(res);
        dispatch(getHeroes(res.data.results));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
