"use client";

import React, {  useEffect, useState } from "react";
import PokemonList from "./components/pokemonList";


const Page = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getData = async () => {
      // Fetch data from external API
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await res.json();

      const pokemonsData = data.results.map((pokemon, index) => ({
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`,
      }));

      setPokemons(pokemonsData);
    };

    getData();
  }, []);

  
  
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Pokemons</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {pokemons.map((pokemon, index) => (
          
            <PokemonList name={pokemon.name} image={pokemon.image} key={index} />
          
        ))}
      </div>
    </div>
  );
};

export default Page ;
