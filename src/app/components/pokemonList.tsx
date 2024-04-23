"use client"
import Pokemon from "./pokemon";
import { createContext, useState } from "react";

export const PokemonContext = createContext();

const PokemonList = ({ name, image }) => {
 
  const [selectedPokemon, setSelectedPokemon] = useState(name);

  const handleClick = () => {
    setSelectedPokemon(name);
  };

  return (
    <a onClick={handleClick} href={`/pokemon`}>
    
      <PokemonContext.Provider value={selectedPokemon}>
        <Pokemon name={name} image={image} />
      </PokemonContext.Provider>
    </a>
  );
};

export default PokemonList;

