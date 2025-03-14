import React from "react";

import styles from "./signIn.module.scss";
import {
  logInAnonymously,
  logInWithGoogle,
} from "../../firebase";

import Google from "../../images/google-brands.inline.svg?react";
import User from "../../images/user-solid.inline.svg?react";

const SignIn = () => {
  return (
    <div className={styles["signIn"]}>
      <h1 className={styles["signIn__h1"]}>Complete your Living Pokédex!</h1>
      <button className={styles["signIn__button"]} onClick={logInWithGoogle}>
        <Google />
        Sign in with Google
      </button>
      <br />
      <hr></hr>
      <br />
      <button className={styles["signIn__button"]} onClick={logInAnonymously}>
        <User />
        Continue as guest
      </button>
      <p>
        By continuing, you agree to Living Pokédex's{" "}
        <a href="./terms_of_service.html" target="_blank">
          Terms of Service
        </a>{" "}
        and confirm that you have read Living Pokédex's{" "}
        <a href="./privacy_policy.html" target="_blank">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
};

export default SignIn;
