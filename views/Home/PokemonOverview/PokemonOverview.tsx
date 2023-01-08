import Toggle from "components/Toggle";
import { attributes, types } from "types/pokemon";
import { formatKgToLbs, formatMetersToFeet } from "utils/utils";
import {
  Card,
  CardElement,
  CardStats,
  CardType,
  ContainerElement,
  ContentElement,
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
  evolutions: any;
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
                width: "320px",
                height: "320px",
              }}
            />
          </Card>
          <Card style={{ justifyContent: "flex-start", paddingLeft: "40px" }}>
            Type
            {types?.map((type: { type: { name: any } }) => (
              <CardType key={type.type.name} type={type.type.name}>
                {type.type.name}
              </CardType>
            ))}
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
          <Card>Evolutions</Card>
        </CardElement>
      </ContentElement>
    </ContainerElement>
  );
};

export default PokemonOverview;
