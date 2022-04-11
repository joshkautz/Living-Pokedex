import React from "react";
import PokemonCard from "./pokemonCard/pokemonCard";
import styles from "./pokemonGrid.module.scss";
const PokemonGrid = ({ data, user, pokedex }) => {
  const { pokemon_v2_pokemon } = data || {};

  return (
    <div className={styles['pokemonGrid']}>
      {pokemon_v2_pokemon &&
        pokemon_v2_pokemon.map((pokemon, i) => {
          const caught = pokedex === undefined ? false : pokedex[i + 1];
          return (
            <PokemonCard
              key={i}
              pokemon={pokemon}
              user={user}
              caught={caught}
            />
          );
        })}
    </div>
  );
};

export default PokemonGrid;
