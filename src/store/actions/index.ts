export const searchHeroes = (heroes: any) => {
  return {
    type: "SEARCH_HEROES",
    payload: heroes
  };
};

export const fetchHero = (hero: any) => {
  return {
    type: "FETCH_HERO",
    payload: hero
  };
};
