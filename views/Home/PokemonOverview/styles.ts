import styled from "styled-components";
import { types } from "types/pokemon";

export const ContainerElement = styled.div`
  background: ${({ theme }) => theme.background.containerElement};
  padding: 2em 5em;
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
  width: 100%;
`;

export const CardElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4em;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background: #fff;
  padding: 8px 12px;
  color: #000;
  border-radius: 8px;
  gap: 1em;
  font-weight: 700;
  box-sizing: content-box;
  box-shadow: 1px 1px #c4c4c4;
  flex-wrap: nowrap;
  white-space: nowrap;
`;

interface CardTypeProps {
  type: types;
}

export const CardType = styled.div<CardTypeProps>`
  background: ${(props) => props.theme.typesColor[props.type]};
  padding: 4px 16px;
  color: #fff;
  border-radius: 8px;
  text-transform: uppercase;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1em;
`;
