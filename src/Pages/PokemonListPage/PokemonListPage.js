import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { useEffect } from "react";
import usePokemonList from "../../Hooks/usePokemonList";
import { CardsContainer } from "../PokedexPage/styles";
import { URL_BASE } from "../../Constants/apiConstants";

function PokedexListPage() {
  const {pokemons,request} = usePokemonList()

  useEffect(()=>{
    request(`${URL_BASE}?offset=${0}&limit=21`)
  },[])

    return (
      <div>
          <Header/>
          <CardsContainer>
              {pokemons.results.map((pokemon)=>{
                  return <PokemonCard
                  key={pokemon.name}
                  url={pokemon.url}
                  />
              })}
          </CardsContainer>
      </div>
  );
}

export default PokedexListPage;

