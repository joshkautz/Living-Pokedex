// Packages
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";

// Utilities
import { pokemon } from "./pokemon";
import { auth, getPokedexDocument } from "./firebase";

// Components
import Header from "./globals/header/header";
import LoadingIndicator from "./components/loadingIndicator/loadingIndicator";
import PokemonGrid from "./components/pokemonGrid/pokemonGrid";
import SignIn from "./components/signIn/signIn";

const App = () => {
  const [authValue, authLoading] = useAuthState(auth);
  const [docValue, docLoading] = useDocumentData(getPokedexDocument(authValue));

  console.log({
    authValue: authValue,
    authLoading: authLoading,
    docValue: docValue,
    docLoading: docLoading,
  });

  const Overlay = (
    <div className="overlay">
      {(authLoading || docLoading) && <LoadingIndicator />}
      {!(authLoading || docLoading) && <SignIn />}
    </div>
  );

  return (
    <>
      {authValue && !authLoading && !docLoading && <Header />}
      <main
        className={`${!authValue || authLoading || docLoading ? "fixed" : ""}`}
      >
        <div className="container">
          {(!authValue || authLoading || docLoading) && Overlay}
          <PokemonGrid
            pokemon={pokemon}
            user={authValue}
            pokedex={docValue ? docValue : {}}
          />
        </div>
      </main>
    </>
  );
};

export default App;
