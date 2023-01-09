import { gql } from "@apollo/client";
import { RESTDataSource } from "apollo-datasource-rest";
import { formatEvolvesPokemon } from "utils/utils";

export const POKEMON_QUERY = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      results {
        id
        name
        image
        artwork
      }
    }
  }
`;

export const POKEMON_BY_NAME = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      weight
      height
      types {
        type {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`;

export const EVOLUTION_BY_ID = gql`
  query evolutionChain($id: String!) {
    evolutionChain(id: $id) {
      response
    }
  }
`;

export const THEME = gql`
  query theme {
    isDark @client
  }
`;

// API do graphQL não está exportando o id da espécie (id da espécie é diferente da pokedex)
export const getPokemonSpecies = (id: string | number) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((T) =>
    T.json()
  );
};

export const getEvolutionChain = async (endpoint: string) => {
  return formatEvolvesPokemon(
    await fetch(endpoint).then((response) => response.json())
  );
};
