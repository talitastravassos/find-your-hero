import { combineReducers } from "redux";
import { Hero, initialHero } from "../../typings/hero.types";

export interface State {
  searchHeroes: Hero[];
  selectHero: Hero;
}

const initialState: State = {
  searchHeroes: [initialHero],
  selectHero: initialHero
};

const heroesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SEARCH_HEROES":
      return {
        ...state,
        searchHeroes: action.payload
      };
    case "FETCH_HERO":
      return {
        ...state,
        selectHero: action.payload
      };  
    default:
      return state;
  }
};

export default combineReducers({
  heroes: heroesReducer
});
