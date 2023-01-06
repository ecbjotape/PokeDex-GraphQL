import { CheckBox, CheckBoxLabel, CheckBoxWrapper, Container } from "./styles";

const Toggle = () => {
  return (
    <Container>
      <img src="/icons/sun.svg" alt="Tema claro" />
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
      <img src="/icons/moon.svg" alt="Tema escuro" />
    </Container>
  );
};

export default Toggle;
