import React from "react";
import PokemonCard from "./pokemonCard/pokemonCard";
import styles from "./pokemonGrid.module.scss";
const PokemonGrid = ({ pokemon, user, pokedex }) => {
  return (
    <div className={styles["pokemonGrid"]}>
      {pokemon.map((pokemon, index) => {
        const caught = pokedex === undefined ? false : pokedex[index + 1];
        return (
          <PokemonCard key={index} pokemon={pokemon} user={user} caught={caught} />
        );
      })}
    </div>
  );
};

export default PokemonGrid;
