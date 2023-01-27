import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToList } from "../../routes/coordinator";
import { Button, Title, Container } from "./styles";

function Header() {
  const location = useLocation();

  const navigate = useNavigate();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <Title> Pokemons</Title>
            <Button onClick={() => goToList(navigate)}>
              Ver pokedex
            </Button>
          </>
        );
      case "/pokedex":
        return (
          <>
            <Title>Pokedex</Title>
            <Button onClick={() => goToHome(navigate)}>
              Ver lista de Pokemons
            </Button>
          </>
        );
      default:
        return (
          <>
            <Title>Detalhes</Title>
            <Button onClick={() => goToHome(navigate)}>
              Voltar para a PokéDex
            </Button>
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;
