import { combineReducers } from "redux";

const initialState = {
  heroes: []
};

const heroesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SEARCH_HEROES":
      return {
        ...state,
        heroes: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  heroes: heroesReducer
});
