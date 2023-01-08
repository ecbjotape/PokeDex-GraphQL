import { useLazyQuery, useQuery } from "@apollo/client";
import Loading from "components/Loading";
import Toggle from "components/Toggle";
import { EVOLUTION_BY_ID, POKEMON_BY_NAME, POKEMON_QUERY } from "config/querys";
import { useMemo, useState } from "react";
import { Pokemon } from "types/pokemon";
import PokemonOverview from "./PokemonOverview";

import {
  Center,
  Container,
  ContainerElement,
  Input,
  Line,
  Menu,
  MenuContainer,
  NamePokemon,
  OakImg,
  SearchBar,
  Text,
} from "./styles";

const Home = () => {
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon>();
  const [searchPokemon, setSearchPokemon] = useState("");

  let { loading, data: pokeData } = useQuery(POKEMON_QUERY, {
    variables: {
      limit: 1154,
    },
  });

  const [getPokemonByName, { data: pokemon, loading: requestPokemon }] =
    useLazyQuery(POKEMON_BY_NAME, {
      variables: {
        name: pokemonSelected?.name,
      },
    });

  const [getEvolutionsById, { data: evolutions }] = useLazyQuery(
    EVOLUTION_BY_ID,
    {
      variables: {
        id: String(pokemonSelected?.id),
      },
    }
  );

  const getPokemonSelected = (pokemon: Pokemon) => {
    setPokemonSelected(pokemon);

    getEvolutionsById();
    getPokemonByName();
  };

  const filteredPokemonList = useMemo(() => {
    let pokemonList = pokeData?.pokemons?.results;

    if (searchPokemon) {
      // filtro com base no nome
      const filteredByName = pokeData?.pokemons?.results?.filter(
        (pokemon: Pokemon) =>
          pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
      );

      // filtro com base no id
      const filteredById = pokeData?.pokemons?.results?.filter(
        (pokemon: Pokemon) => String(pokemon.id).includes(searchPokemon)
      );

      const filteredsPokemons = [...filteredByName, ...filteredById];

      // remove elementos duplicados do array
      // @ts-ignore
      const _pokemonList = [...new Set(filteredsPokemons)];

      pokemonList = _pokemonList;
    }
    return pokemonList;
  }, [searchPokemon, pokeData]);

  return (
    <Container>
      <Menu>
        <img src="/images/logo-pokedex.webp" alt="Logo pokedex" />
        <Text>
          Everything you wanted to know about your favorite pocket monsters!
        </Text>
        <SearchBar>
          <Input
            type="text"
            onChange={(e: any) => setSearchPokemon(e.target.value)}
            placeholder="Search by name or number"
          />
          {/* <img src="/icons/search.svg" alt="pesquisar" /> */}
        </SearchBar>
        <Line />
        <MenuContainer>
          {loading ? (
            <Center style={{ flexDirection: "column" }}>
              <Loading option="pokeball" width="50%" />
              <p>loading...</p>
            </Center>
          ) : filteredPokemonList?.length > 0 ? (
            filteredPokemonList?.map((pokemon: any) => (
              <NamePokemon
                key={pokemon.id}
                onClick={() => getPokemonSelected(pokemon)}
              >
                #{pokemon?.id} - {pokemon?.name}
              </NamePokemon>
            ))
          ) : (
            <Center style={{ flexDirection: "column" }}>
              <Loading option="pikachu" width="100%" height="100%" />
              <p>pokemon not found...</p>
            </Center>
          )}
        </MenuContainer>
      </Menu>

      {!pokemonSelected && (
        <ContainerElement>
          <OakImg src="/images/prof-oak.png" alt="imagem do professor oak" />
          <Center>
            <h1>choose your pokemon</h1>
            <Loading option="dugtrio" height={120} width={250} />
            <Toggle />
          </Center>
        </ContainerElement>
      )}

      {requestPokemon && (
        <ContainerElement>
          <Center>
            <Loading option="pokeball" />
          </Center>
        </ContainerElement>
      )}

      {pokemon && pokemonSelected && (
        <PokemonOverview
          id={pokemon?.pokemon?.id}
          image={pokemonSelected?.image}
          artwork={pokemonSelected.artwork}
          name={pokemon?.pokemon?.name}
          types={pokemon?.pokemon?.types}
          height={pokemon?.pokemon?.height}
          weight={pokemon?.pokemon?.weight}
          stats={pokemon?.pokemon?.stats}
          evolutions={evolutions?.evolutionChain?.response?.chain}
        />
      )}
    </Container>
  );
};

export default Home;
