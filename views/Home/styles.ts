import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  height: 100vh;
`;

export const Menu = styled.div`
  background: ${({ theme }) => theme.background.menu};
  padding: 3em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 24px;
  }
`;

export const Text = styled.p`
  text-align: center;
  margin-bottom: 41px;
`;

export const SearchBar = styled.div`
  background-color: #fff;
  border-radius: 15px;
  width: 100%;
  height: 32px;
  margin-bottom: 21px;

  img {
    height: 16px;
    width: 16px;
    left: 300px;
    top: 220px;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 15px;
  height: 100%;
  width: 100%;
  padding: 8px;
  color: #000;
  outline: none;
`;

export const Line = styled.div`
  border: 1px solid #fcdcdc;
  width: 100%;
  margin-bottom: 32px;
`;

export const NamePokemon = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  overflow: auto;
  max-height: 600px;
`;

export const ContainerElement = styled.div`
  background: ${({ theme }) => theme.background.containerElement};
  padding: 5em 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

export const OakImg = styled.img`
  width: 15%;
  object-fit: cover;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
