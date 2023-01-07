import Toggle from "components/Toggle";
import { types } from "types/pokemon";
import { formatKgToLbs } from "utils/utils";
import {
  Card,
  CardElement,
  CardType,
  ContainerElement,
  ContentElement,
  NameElement,
  Row,
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
}

const PokemonOverview = ({
  id,
  name,
  image,
  types,
  weight,
  height,
  artwork,
}: PokemonOverviewProps) => {
  return (
    <ContainerElement>
      <TitleElement>
        <NameElement>
          #{id} - {name}
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
          <Card>
            Type
            {types?.map((type: { type: { name: any } }) => (
              <CardType key={type.type.name} type={type.type.name}>
                {type.type.name}
              </CardType>
            ))}
          </Card>
          <Row>
            <Card>Height: {height}</Card>
            <Card>Weight: {formatKgToLbs(weight)}</Card>
          </Row>
        </CardElement>
        <div style={{ backgroundColor: "black" }}>grid 2</div>
      </ContentElement>
    </ContainerElement>
  );
};

export default PokemonOverview;
