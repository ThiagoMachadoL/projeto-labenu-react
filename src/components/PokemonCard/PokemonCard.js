import { useEffect } from "react"
import usePokemon from "../../Hooks/usePokemon"
import { CatchButton, Container, DetalsButton, Pokeball, Pokemon, PokemonName, PokemonNumber, PokemonType, TypesContainer } from "./styles"
import pokeball from '../../assets/pngwing 2.png'
import { cardTypes } from "../../Functions/cardTypes"
import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../../routes/coordinator"


const PokemonCard = ({url}) => {
  const navigate = useNavigate()
  const {
    pokemon, request
} = usePokemon();
  useEffect(()=>{
    request(url)
  },[])
  return (
<Container backColors={pokemon.backColors}>
      <div>
        <PokemonNumber>{pokemon.id}</PokemonNumber>
        <PokemonName>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</PokemonName>
        <TypesContainer>
        {pokemon.types.map((type) => {
                return <PokemonType key={type} src={cardTypes(type)} alt='' />
            })}
        </TypesContainer>
        <button onClick={() => goToDetailsPage(navigate)}>Detalhes</button>
      </div>
      <div>
        <Pokemon src={pokemon.sprites.default} alt={pokemon.name}/>
        <CatchButton>adicionar</CatchButton>
      </div>
      <Pokeball src={pokeball} alt="pokeball" />
    </Container>
  )
}

export default PokemonCard