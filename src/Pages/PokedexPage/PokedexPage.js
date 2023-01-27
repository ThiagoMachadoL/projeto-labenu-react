import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { useNavigate } from 'react-router-dom'
import { CardsContainer } from './styles'
import usePokemonList from '../../Hooks/usePokemonList'
import { URL_BASE } from '../../Constants/apiConstants'


const PokedexPage = () => {
    const navigate=useNavigate()
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
  )
}

export default PokedexPage