export type Pokemon = {
  id: number;
  image: string;
  name: string;
  abilities?: any[];
  base_experience?: number;
  artwork: string;
  types?: any[];
  sprites?: any;
  stats?: {
    hp: number;
    attack: number;
    defense: number;
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
