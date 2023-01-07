import { gql } from "@apollo/client";

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
        stat {
          name
        }
      }
    }
  }
`;

export const EVOLUTION_BY_NAME = gql`
  query evolutionTrigger($name: String!) {
    evolutionTrigger(name: $name) {
      params
      status
      message
      response
    }
  }
`;
