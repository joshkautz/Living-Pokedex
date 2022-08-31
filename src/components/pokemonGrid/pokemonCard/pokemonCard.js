import React from "react";
import styles from "./pokemonCard.module.scss";
import { updatePokedexDocument } from "../../../firebase";

const PokemonCard = ({ pokemon, user, caught }) => {
  return (
    <button
      className={`${styles["pokemonCard"]} ${
        caught ? styles["pokemonCard--active"] : ""
      }`}
      onClick={() => updatePokedexDocument(user, parseInt(pokemon.idx), !caught)}
    >
      <div className={styles["pokemonCard__img"]}>
        <img
          height="56px"
          width="68px"
          alt=""
          src={`./sprites/${pokemon.slug.eng}.png`}
        />
      </div>
      <div className={styles["pokemonCard__details"]}>
        <span>#{pokemon.idx}</span>
        <p>{pokemon.name.eng}</p>
      </div>
    </button>
  );
};

export default PokemonCard;
