// Packages
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

// Utilities
import { pokemon } from "./pokemon";
import { auth, listenToFirestore } from "./firebase";

// Components
import Header from "./globals/header/header";
import LoadingIndicator from "./components/loadingIndicator/loadingIndicator";
import PokemonGrid from "./components/pokemonGrid/pokemonGrid";
import SignIn from "./components/signIn/signIn";

const App = () => {
  const [user, loading] = useAuthState(auth);
  const [showLoading, setShowLoading] = useState(loading);
  const [pokedex, setPokedex] = useState({});
  let hasOverlay = showLoading || !user;

  useEffect(() => {
    // Show loading indicator if authentication state is still being loaded.
    if (loading) {
      setShowLoading(true);
    } else {
      setShowLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    console.log(pokedex);
  }, [pokedex]);

  useEffect(() => {
    listenToFirestore(setPokedex, setShowLoading, user);
  }, [user]);

  return (
    <>
      {user && !hasOverlay && <Header />}
      <main className={`${hasOverlay ? "fixed" : ""}`}>
        <div className="container">
          {hasOverlay && (
            <div className="overlay">
              {showLoading && <LoadingIndicator />}
              {!showLoading && <SignIn setShowLoading={setShowLoading} />}
            </div>
          )}
          <PokemonGrid pokemon={pokemon} user={user} pokedex={pokedex} />
        </div>
      </main>
    </>
  );
};

export default App;
