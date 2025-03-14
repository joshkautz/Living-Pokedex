import React from "react";
import styles from "./pokemonCard.module.scss";
import { updatePokedexDocument } from "../../../firebase";

const PokemonCard = ({ pokemon, user, caught }) => {
  return (
    <button
      className={`${styles["pokemonCard"]} ${
        caught ? styles["pokemonCard--active"] : ""
      }`}
      onClick={() =>
        updatePokedexDocument(user, parseInt(pokemon.idx), !caught)
      }
    >
      <div className={styles["pokemonCard__img"]}>
        <img
          height="56"
          width="60px"
          alt=""
          src={`./sprites/${pokemon.slug}.avif`}
        />
      </div>
      <div className={styles["pokemonCard__details"]}>
        <span>#{pokemon.idx}</span>
        <p>{pokemon.name}</p>
      </div>
    </button>
  );
};

export default PokemonCard;
