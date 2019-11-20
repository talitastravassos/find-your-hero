export const getHeroes = (heroes: any) => {
  return {
    type: "SEARCH_HEROES",
    payload: heroes
  };
};
