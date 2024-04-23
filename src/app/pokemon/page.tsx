
import { useContext } from "react";
import { PokemonContext } from "../components/pokemonList";

const Pokemon = () => {

    const pokemon = useContext(PokemonContext);

  return (
    <div>
      <h1>Detalles de Pokémon</h1>
      <h2>{pokemon}</h2>
    </div>
  );
};

export default Pokemon;
