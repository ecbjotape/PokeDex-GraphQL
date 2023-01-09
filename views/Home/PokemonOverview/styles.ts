import styled from "styled-components";
import { stats, types } from "types/pokemon";

export const ContainerElement = styled.div`
  background: ${({ theme }) => theme.background.containerElement};
  padding: 1em 4em 2em 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4em;
`;

export const TitleElement = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const NameElement = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color};
  font-size: 48px;
  gap: 0.5em;
`;

export const ContentElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3em;
  width: 100%;

  @media (max-width: 1100px) {
    display: block;
  }
`;

export const CardElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #fff;
  padding: 12px 16px;
  color: #000;
  border-radius: 8px;
  gap: 1em;
  font-weight: 700;
  box-shadow: 1px 1px #c4c4c4;

  p {
    color: #000;
    font-weight: 400;
  }

  @media (max-width: 1100px) {
    margin-bottom: 8px;
  }
`;

interface CardTypeProps {
  type: types;
}

export const CardType = styled.div<CardTypeProps>`
  background: ${(props) => props.theme.typesColor[props.type]};
  padding: 4px 16px;
  color: #fff;
  border-radius: 8px;
  font-weight: 400;
  text-transform: uppercase;
`;

interface CardStatsProps {
  stats: stats;
}

export const CardStats = styled.div<CardStatsProps>`
  background: ${(props) => props.theme.statsColor[props.stats]};
  padding: 4px 16px;
  color: #fff;
  border-radius: 8px;
  font-weight: 500;
  text-transform: uppercase;
  max-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  white-space: nowrap;

  p {
    color: ${(props) => props.theme.color};
  }
`;

export const StatsElements = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1em;
`;

export const EvolutionCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  img {
    max-width: 120px;
  }
`;
