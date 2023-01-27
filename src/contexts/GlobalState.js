import axios from "axios";
import { useEffect, useState } from "react";
import { URL_BASE } from "../Constants/apiConstants";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState(props) {
    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        fetchPokelist();
    }, []);

    const fetchPokelist = async () => {
        try {
            const response = await axios.get(URL_BASE);
            setPokelist(response.data.results);
        } catch (error) {
            console.log("Erro ao buscar lista de pokemons");
            console.log(error.response);
        }
    };

    const addToPokedex = (pokemonToAdd) => {
        const isAlreadyOnPokedex = pokedex.find(
            (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
        );

        if (!isAlreadyOnPokedex) {
            const newPokedex = [...pokedex, pokemonToAdd];
            setPokedex(newPokedex);
        }
    };

    const removeFromPokedex = (pokemonToRemove) => {
        const newPokedex = pokedex.filter(
            (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
        );

        setPokedex(newPokedex);
    };

    const context = {
        pokelist,
        addToPokedex,
        pokedex,
        removeFromPokedex
    }

    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}
