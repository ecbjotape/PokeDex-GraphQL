import { isDarkTheme as theme } from "atoms/theme";
import { useRecoilState } from "recoil";
import { CheckBox, CheckBoxLabel, CheckBoxWrapper, Container } from "./styles";

const Toggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useRecoilState(theme);

  return (
    <Container>
      <img src="/icons/sun.svg" alt="Tema claro" />
      <CheckBoxWrapper>
        <CheckBox
          id="checkbox"
          type="checkbox"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          defaultChecked={isDarkTheme}
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
      <img src="/icons/moon.svg" alt="Tema escuro" />
    </Container>
  );
};

export default Toggle;
