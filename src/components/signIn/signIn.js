import React from 'react';

import styles from './signIn.module.scss';
import { logInAnonymously, logInWithGoogle, logInWithTwitter, logInWithFacebook } from "../../firebase/auth";
import { ReactComponent as Facebook } from '../../images/facebook-brands.inline.svg';
import { ReactComponent as Twitter } from '../../images/twitter-brands.inline.svg';
import { ReactComponent as Google } from '../../images/google-brands.inline.svg';
import { ReactComponent as User } from '../../images/user-solid.inline.svg';

const SignIn = (props) => {

  const setShowLoading = props.setShowLoading;

  return (
    <div className={styles['signIn']} >
      <h1 className={styles['signIn__h1']}>Complete your Living Pokédex!</h1>
      <button className={styles['signIn__button']} onClick={() => logInWithGoogle(setShowLoading)}><Google/>Sign in with Google</button>
      <button className={styles['signIn__button']} onClick={() => logInWithTwitter(setShowLoading)}><Twitter/>Sign in with Twitter</button>
      <button className={styles['signIn__button']} onClick={() => logInWithFacebook(setShowLoading)}><Facebook/>Sign in with Facebook</button>
      <br />
      <hr></hr>
      <br />
      <button className={styles['signIn__button']} onClick={() => logInAnonymously(setShowLoading)}><User/>Continue as guest</button>
    </div>
  )
}

export default SignIn
