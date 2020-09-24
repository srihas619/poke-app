import React, {useState, useEffect} from 'react';
import "./Pokemons.css";
import Pokemon from '../Pokemon/Pokemon';

const Pokemons = () => {

    useEffect(() => {
        fetchGenOnePokemons();
    },[]);

    const[pokemons, setPokemons] = useState([]);
    const fetchGenOnePokemons = async() =>{
        const data = await fetch(
            'https://pokeapi.co/api/v2/pokemon?limit=151'
        );
        const items = await data.json();
        setPokemons(items.results);
    }

    return (
        <div className="Pokemons">
            {pokemons.map(pokemon =>(
                <Pokemon key={pokemon.name} eachPokemon={pokemon} />
            ))}
        </div>
    );
}

export default Pokemons;
