export interface Hero {
  response?: string;
  id: string;
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  biography: {
    "full-name": string;
    "alter-egos": string;
    aliases: string[];
    "place-of-birth": string;
    "first-appearance": string;
    publisher: string;
    alignment: string;
  };
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    "eye-color": string;
    "hair-color": string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    "group-affiliation": string;
    relatives: string;
  };
  image: {
    url: string;
  };
}

export const initialHero = {
  response: "",
  id: "",
  name: "",
  powerstats: {
    intelligence: "",
    strength: "",
    speed: "",
    durability: "",
    power: "",
    combat: ""
  },
  biography: {
    "full-name": "",
    "alter-egos": "",
    aliases: [""],
    "place-of-birth": "",
    "first-appearance": "",
    publisher: "",
    alignment: ""
  },
  appearance: {
    gender: "",
    race: "",
    height: [""],
    weight: [""],
    "eye-color": "",
    "hair-color": ""
  },
  work: {
    occupation: "",
    base: ""
  },
  connections: {
    "group-affiliation": "",
    relatives: ""
  },
  image: {
    url: ""
  }
};
