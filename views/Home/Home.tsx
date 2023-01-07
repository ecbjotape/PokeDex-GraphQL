import { useLazyQuery, useQuery } from "@apollo/client";
import Loading from "components/Loading";
import { POKEMON_BY_NAME, POKEMON_QUERY } from "config/querys";
import { useEffect, useState } from "react";
import { Pokemon } from "types/pokemon";
import PokemonOverview from "./PokemonOverview";

import {
  Container,
  Input,
  Line,
  Menu,
  MenuContainer,
  NamePokemon,
  SearchBar,
  Text,
} from "./styles";

const Home = () => {
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon>();
  const { loading, data: pokeData } = useQuery(POKEMON_QUERY, {
    variables: {
      limit: 1154,
    },
  });

  const [getPokemonByName, { data: pokemon }] = useLazyQuery(POKEMON_BY_NAME, {
    variables: {
      name: pokemonSelected?.name,
    },
  });

  const _getPokemonByName = (pokemon: Pokemon) => {
    setPokemonSelected(pokemon);

    getPokemonByName();
  };

  return (
    <Container>
      <Menu>
        <img src="/images/logo-pokedex.webp" alt="Logo pokedex" />
        <Text>
          Everything you wanted to know about your favorite pocket monsters!
        </Text>
        <SearchBar>
          <Input type="text" placeholder="Search by name of number" />
          {/* <img src="/icons/search.svg" alt="pesquisar" /> */}
        </SearchBar>
        <Line />
        <MenuContainer>
          {loading ? (
            <Loading />
          ) : (
            pokeData.pokemons.results.map((pokemon: any) => (
              <NamePokemon
                key={pokemon.id}
                onClick={() => _getPokemonByName(pokemon)}
              >
                #{pokemon?.id} - {pokemon?.name}
              </NamePokemon>
            ))
          )}
        </MenuContainer>
      </Menu>
      {pokemon && pokemonSelected ? (
        <PokemonOverview
          id={pokemon?.pokemon?.id}
          image={pokemonSelected?.image}
          artwork={pokemonSelected.artwork}
          name={pokemon?.pokemon?.name}
          types={pokemon?.pokemon?.types}
          height={pokemon?.pokemon?.height}
          weight={pokemon?.pokemon?.weight}
        />
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Home;
