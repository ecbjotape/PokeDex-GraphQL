import { useLazyQuery, useQuery } from "@apollo/client";
import Loading from "components/Loading";
import Toggle from "components/Toggle";
import { getEvolutionChain, getPokemonSpecies } from "config/querys";
import { POKEMON_BY_NAME, POKEMON_QUERY } from "config/querys";
import { useMemo, useState } from "react";
import { Pokemon } from "types/pokemon";
import { formatEvolvesPokemon } from "utils/utils";
import PokemonOverview from "./PokemonOverview";
import {
  Center,
  Container,
  ContainerElement,
  ContentElement,
  Input,
  Line,
  Menu,
  MenuContainer,
  NamePokemon,
  OakImg,
  SearchBar,
  Text,
} from "./styles";

let pokemonSpecie: any;

const Home = () => {
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon>();
  const [searchPokemon, setSearchPokemon] = useState("");
  const [pokemonEvolution, setPokemonEvolution] = useState<Pokemon[]>([]);

  let { loading, data: pokeData } = useQuery(POKEMON_QUERY, {
    variables: {
      limit: 1154,
      offset: 0,
    },
  });

  const [getPokemonByName, { data: pokemon, loading: requestPokemon }] =
    useLazyQuery(POKEMON_BY_NAME, {
      variables: {
        name: pokemonSelected?.name,
      },
    });

  const getPokemonSelected = async (pokemon: Pokemon) => {
    setPokemonSelected(pokemon);

    getPokemonByName();
    // requets specie do pokemon para pegar o id das evoluções
    pokemonSpecie = await getPokemonSpecies(pokemon.id);

    // request evoluções com o id pegado anteriormente
    const evolutions = await getEvolutionChain(
      pokemonSpecie.evolution_chain.url
    );

    let evolution: Pokemon[] = [];

    // seleciona as evoluções da lista de pokemon com base no nome
    filteredPokemonList.map((p: Pokemon) => {
      evolutions.map((ev: string) => {
        if (
          p.name.toLowerCase() == ev &&
          p.name.toLowerCase() !== pokemon?.name.toLowerCase()
        )
          evolution.push(p);
      });
    });

    setPokemonEvolution(evolution);
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
              <Loading option="pokeball" width="30%" />
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
        <ContentElement>
          <div style={{ display: "flex", alignSelf: "flex-end" }}>
            <Toggle />
          </div>
          <ContainerElement>
            <OakImg src="/images/prof-oak.png" alt="imagem do professor oak" />
            <Center>
              <h1>choose your pokemon</h1>
              <Loading option="dugtrio" height="50%" width="50%" />
            </Center>
          </ContainerElement>
        </ContentElement>
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
          image={pokemonSelected.image}
          artwork={pokemonSelected.artwork}
          name={pokemon?.pokemon?.name}
          types={pokemon?.pokemon?.types}
          height={pokemon?.pokemon?.height}
          weight={pokemon?.pokemon?.weight}
          stats={pokemon?.pokemon?.stats}
          text={pokemonSpecie?.flavor_text_entries[0]?.flavor_text}
          evolutions={pokemonEvolution}
        />
      )}
    </Container>
  );
};

export default Home;
