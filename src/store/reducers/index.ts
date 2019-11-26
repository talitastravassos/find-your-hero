import { combineReducers } from "redux";

const initialState = {
  searchHeroes: {},
  selectHero: {}
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
