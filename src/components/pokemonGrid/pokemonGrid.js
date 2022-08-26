import React, {useState} from "react";
import PokemonCard from "./pokemonCard/pokemonCard";
import styles from "./pokemonGrid.module.scss";
import {ReactComponent as SearchIcon} from "../../images/magnifying-glass-solid.inline.svg";

const PokemonGrid = ({ pokemon, user, pokedex }) => {
  const [ searchQuery, setSearchQuery ] = useState('');
  return (
    <div className={styles["pokemonGrid"]}>      
      <label htmlFor="search" className="sr-only" >Search: </label>
      <div className={styles["pokemonGrid__search"]}>
        <SearchIcon />
        <input type="text" name="search" placeholder="Search by Name or Number..." onChange={(e)=>setSearchQuery(e.target.value)} />
      </div>
      <div className={styles["pokemonGrid__grid"]}>
        {pokemon.filter(d=>searchQuery === '' || d?.idx?.includes(searchQuery) || Object.values(d?.name).some(i=>i.toLowerCase().includes(searchQuery.toLowerCase()))).map((pokemon, index) => {
          const caught = pokedex === undefined ? false : pokedex[index + 1];
          return (
            <PokemonCard key={index} pokemon={pokemon} user={user} caught={caught} />
          );
        })}
      </div>
    </div>

  );
};

export default PokemonGrid;
