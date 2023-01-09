import Image from "next/image";
import {
  Button,
  Config,
  Container,
  ContainerElement,
  Header,
  Input,
  Logo,
  Pokeball,
} from "./styles";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const navigateToHome = (e: any) => {
    e.preventDefault();

    router.push("/home");
  };

  return (
    <>
      <Header>
        <Logo src="/images/logo-pokedex.webp" alt="Logo pokedex" />
        <Config src="/images/settings.svg" alt="engrenagem" />
      </Header>
      <Container>
        <ContainerElement>
          <Pokeball src="/images/pokeball.svg" alt="pokeball" />
          <form onSubmit={navigateToHome}>
            <Input type="email" required placeholder="Seu melhor e-mail" />
            <Button type="submit">Acessar</Button>
          </form>
        </ContainerElement>
      </Container>
    </>
  );
};

export default Login;
