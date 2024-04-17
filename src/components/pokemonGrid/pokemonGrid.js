import React, { useState, useEffect } from "react";
import PokemonCard from "./pokemonCard/pokemonCard";
import styles from "./pokemonGrid.module.scss";
import { ReactComponent as SearchIcon } from "../../images/magnifying-glass-solid.inline.svg";

const PokemonGrid = ({ pokemon, user, pokedex }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!user) setSearchQuery("");
  }, [user]);

  return (
    <div className={styles["pokemonGrid"]}>
      <label htmlFor="search" className="sr-only">
        Search:{" "}
      </label>
      <div className={styles["pokemonGrid__search"]}>
        <SearchIcon />
        <input
          value={searchQuery}
          type="text"
          name="search"
          placeholder="Search by Name or Number..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className={styles["pokemonGrid__grid"]}>
        {pokemon
          .filter(
            (pokemon) =>
              searchQuery === "" ||
              pokemon.idx.includes(searchQuery) ||
              pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((pokemon) => {
            const caught =
              pokedex === undefined ? false : pokedex[parseInt(pokemon.idx)];
            return (
              <PokemonCard
                key={pokemon.idx}
                pokemon={pokemon}
                user={user}
                caught={caught}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PokemonGrid;
