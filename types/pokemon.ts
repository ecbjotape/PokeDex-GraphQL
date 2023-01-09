export type Pokemon = {
  id: number;
  image: string;
  name: string;
  abilities?: any[];
  base_experience?: number;
  artwork: string;
  types?: any[];
  sprites?: any;
  stats?: attributes;
};

export type attributes = {
  base_stat: number;
  stat: {
    name: stats;
  };
};

export type types =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy"
  | "default";

export type stats =
  | "hp"
  | "attack"
  | "defense"
  | "sprecial-attack"
  | "special-defense"
  | "speed";

export type evolves_to = {};
export type evolutionChain = {
  chain: {
    evolves_to: [];
  };
  species: {
    name: string;
  };
  evolves_to: [];
};
