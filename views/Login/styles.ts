import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 85vh;
`;

export const ContainerElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5em;
  /* width: 20%; */
  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  font-size: 1.5rem;
  padding: 2.5rem;
  background-color: #e04c4c;
`;

export const Logo = styled.img``;

export const Config = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 0.5em;
  font-weight: 400;
  color: #848484;
  width: 100%;
  border: 1px solid #ececec;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 500;
  background: #0854d4;
  color: #fff;
  border-style: none;
  padding: 1em 3em;
  align-self: flex-start;
  border-radius: 3px;
`;

export const Pokeball = styled.img`
  width: 50%;
`;
