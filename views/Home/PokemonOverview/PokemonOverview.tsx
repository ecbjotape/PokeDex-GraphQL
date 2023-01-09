import Toggle from "components/Toggle";
import { attributes, Pokemon, types } from "types/pokemon";
import { formatKgToLbs, formatMetersToFeet } from "utils/utils";
import {
  Card,
  CardElement,
  CardStats,
  CardText,
  CardType,
  ContainerElement,
  ContentElement,
  EvolutionCard,
  NameElement,
  Row,
  StatsElements,
  TitleElement,
} from "./styles";

interface PokemonOverviewProps {
  id: number;
  name: string;
  image: string;
  artwork: string;
  types: any;
  weight: number;
  height: number;
  stats: any;
  evolutions: Pokemon[];
  text: string;
}

const PokemonOverview = ({
  id,
  name,
  image,
  types,
  weight,
  height,
  artwork,
  stats,
  text,
  evolutions,
}: PokemonOverviewProps) => {
  const attributes: any = {
    hp: "hp",
    speed: "speed",
    attack: "atk",
    defense: "def",
    "special-attack": "sp. atk",
    "special-defense": "sp. def",
  };

  return (
    <ContainerElement>
      <TitleElement>
        <NameElement>
          #{id || "N/A"} - {name || "N/A"}
          <img src={image} alt="imagem do pokemon" />
        </NameElement>
        <Toggle />
      </TitleElement>
      <ContentElement>
        <CardElement>
          <Card>
            <img
              src={artwork}
              alt="imagem do pokemon"
              style={{
                maxWidth: "320px",
                maxHeight: "320px",
              }}
            />
          </Card>
          <Card style={{ justifyContent: "flex-start", paddingLeft: "40px" }}>
            Type
            <Row>
              {types?.map((type: { type: { name: any } }) => (
                <CardType key={type.type.name} type={type.type.name}>
                  {type.type.name}
                </CardType>
              ))}
            </Row>
          </Card>
          <Row>
            <Card>
              Height: <p>{formatMetersToFeet(height)}</p>
            </Card>
            <Card>
              Weight:
              <p>{formatKgToLbs(weight)}</p>
            </Card>
          </Row>
          <Card
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            Attributes
            <StatsElements>
              {stats?.map((stats: attributes) => (
                <CardStats key={stats.stat.name} stats={stats.stat.name}>
                  <p>{stats.base_stat}</p>
                  <p>{attributes[stats.stat.name]}</p>
                </CardStats>
              ))}
            </StatsElements>
          </Card>
        </CardElement>
        <CardElement>
          <Card>
            <div
              style={{
                alignSelf: "flex-start",
              }}
            >
              Evolutions
            </div>
            {evolutions.map((evolves: Pokemon) => (
              <EvolutionCard>
                <img src={evolves.artwork} alt="envolve" />
                <p>{evolves.name}</p>
              </EvolutionCard>
            ))}
          </Card>
          <CardText>
            <p>{text}</p>
          </CardText>
        </CardElement>
      </ContentElement>
    </ContainerElement>
  );
};

export default PokemonOverview;
