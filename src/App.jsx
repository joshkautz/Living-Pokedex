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

  const showSignIn = !authValue && !authLoading;
  const showLoadingIndicator =
    authLoading ||
    docLoading ||
    (authValue &&
      authLoading === false &&
      docValue === undefined &&
      docLoading === false);
  const showOverlay = showSignIn || showLoadingIndicator;

  return (
    <>
      {!showOverlay && <Header />}
      <main className={`${showOverlay ? "fixed" : ""}`}>
        <div className="container">
          {showOverlay && (
            <div className="overlay">
              {showSignIn && <SignIn />}
              {showLoadingIndicator && <LoadingIndicator />}
            </div>
          )}
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
