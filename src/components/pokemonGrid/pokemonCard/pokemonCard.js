import React, { useState, useEffect } from "react";
import styles from "./pokemonCard.module.scss";
import { updatePokedex } from "../../../firebase/firestore";

const PokemonCard = ({ pokemon, user, caught }) => {
  const [isCaught, setIsCaught] = useState(false);

  // "User" is a required dependency for the circumstance where a user's pokedex has one or more pokemon that aren't caught when they initially log in. When they click the log out button,
  // the pokedex state changes to a completely empty pokedex. If they had caught any of the initially uncaught pokemon during their session, the caught pokemon would remain highlighted
  // because the "caught" prop for the card never actually changed, so it didn't need to re-render.
  useEffect(() => {
    setIsCaught(caught);
  }, [caught, user]);

  const updateCard = (user, id) => {
    setIsCaught((prevIsCaught) => !prevIsCaught);
    updatePokedex(user, id, !isCaught); // TODO: Run this asynchronous call whenever isCaught changes.
  };

  return (
    <button
      className={`${styles['pokemonCard']} ${isCaught ? styles['pokemonCard--active'] : ""}`}
      onClick={() => updateCard(user, parseInt(pokemon.idx))}
    >
      <div className={styles['pokemonCard__img']}>
        <img
          height="50px"
          width="auto"
          alt=""
          src={`./sprites/${pokemon.slug.eng}.png`}
        />
      </div>
      <div className={styles['pokemonCard__details']}>
        <span>#{pokemon.idx}</span>
        <p>{pokemon.name.eng}</p>
      </div>
    </button>
  );
};

export default PokemonCard;
