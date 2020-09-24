import React, {useState, useEffect} from 'react';
import "./Pokemon.css";
import Image from '../Image/Image';

const Pokemon = (props) => {
    
    useEffect(() => {
        fetchEachPokemonDetails();
    },[]);

    const eachPokemon = props.eachPokemon;
    const[pokemon, setPokemon] = useState({
        id: null,
        name: null,
        types: [],
        image_url: null
    });

    const fetchEachPokemonDetails = async() => {
        const data = await fetch(
            eachPokemon.url
        );
        const items = await data.json();
        setPokemon({
            id: items.id,
            name: items.name,
            types: items.types,
            image_url: items.sprites.front_default
        });
    }

    return(
        <div className="Pokemon">
            <h3>{pokemon.id}. {pokemon.name}</h3>
            <Image pokeImageURL={pokemon.image_url} />
            {pokemon.types.map(pokeType =>(
                <p key={pokeType.type.name}>
                    {pokeType.type.name}
                </p>
            ))}
        </div>
    );
}

export default Pokemon;