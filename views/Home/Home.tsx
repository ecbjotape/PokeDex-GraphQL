import { gql, useLazyQuery } from "@apollo/client";
import Toggle from "components/Toggle";
import { useEffect, useState } from "react";
import {
  Card,
  Container,
  ContainerElement,
  ContentElement,
  Input,
  Line,
  Menu,
  MenuContainer,
  NameElement,
  NamePokemon,
  SearchBar,
  Text,
  TitleElement,
} from "./styles";

const POKEMON_QUERY = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        url
        name
        image
      }
    }
  }
`;

const POKEMON_BY_NAME = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      message
      status
    }
  }
`;

const Home = () => {
  const [getPokemons, { data: pokeData }] = useLazyQuery(POKEMON_QUERY);
  const [pokemonSelected, setPokemonSelected] = useState(pokeData);
  const [getPokemonByName, { data: Pokemon }] = useLazyQuery(POKEMON_BY_NAME, {
    variables: pokemonSelected?.name,
  });

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    getPokemonByName();
  }, [pokemonSelected]);
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
          {pokeData?.pokemons?.results?.map((pokemon: any) => (
            <NamePokemon onClick={() => setPokemonSelected(pokemon)}>
              #{pokemon?.id} - {pokemon?.name}
            </NamePokemon>
          ))}
        </MenuContainer>
      </Menu>
      <ContainerElement>
        <TitleElement>
          <NameElement>
            #{Pokemon} - {Pokemon?.name}
            <img src={pokemonSelected?.image} alt="imagem do pokemon" />
          </NameElement>
          <Toggle />
        </TitleElement>
        <ContentElement>
          <div>
            <img src={pokemonSelected?.image} alt="imagem do pokemon" />
            <Card>Type</Card>
          </div>
          <div>
            <img src="/images/pokeball.svg" alt="imagem do pokemon" />
            <Card>Type</Card>
          </div>
        </ContentElement>
      </ContainerElement>
    </Container>
  );
};

export default Home;
