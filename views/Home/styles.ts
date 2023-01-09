import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  height: 100vh;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Menu = styled.div`
  background: ${({ theme }) => theme.background.menu};
  transition: width 2s;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 24px;
    width: 80%;
    object-fit: cover;
  }
`;

export const Text = styled.p`
  text-align: center;
  margin-bottom: 41px;
  color: ${({ theme }) => theme.color};
`;

export const SearchBar = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 15px;
  width: 100%;
  height: 32px;
  margin-bottom: 21px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 15px;
  height: 100%;
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.inputText};
  outline: none;
`;

export const Line = styled.div`
  border: 1px solid ${({ theme }) => theme.backgroundColor};
  width: 100%;
  margin-bottom: 32px;
`;

export const NamePokemon = styled.div`
  font-size: 21px;
  font-weight: 400;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.color};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const MenuContainer = styled.div`
  max-height: 600px;
  overflow: auto;
  position: relative;
  width: 120%;
  padding-left: 2rem;

  @media (max-width: 1100px) {
    width: 100%;
    height: 120px;
  }
`;

export const ContainerElement = styled.div`
  background: ${({ theme }) => theme.background.containerElement};
  padding: 5em 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;
export const ContentElement = styled.div`
  background: ${({ theme }) => theme.background.containerElement};
  display: flex;
  flex-direction: column;
  padding: 3em 4em 0em 4em;
`;

export const OakImg = styled.img`
  width: 15%;
  object-fit: cover;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  h1 {
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.color};
  }
`;
