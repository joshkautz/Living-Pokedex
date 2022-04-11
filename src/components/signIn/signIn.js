import React from 'react';

import { logInAnonymously, logInWithGoogle, logInWithTwitter, logInWithFacebook } from "../../firebase/auth";
import styles from './signIn.module.scss';
import { ReactComponent as Facebook } from '../../images/facebook-brands.inline.svg';
import { ReactComponent as Twitter } from '../../images/twitter-brands.inline.svg';
import { ReactComponent as Google } from '../../images/google-brands.inline.svg';
import { ReactComponent as User } from '../../images/user-solid.inline.svg';

const SignIn = (props) => {

  const setShowLoading = props.setShowLoading;

  return (
    <div className={styles['signIn']} >
      <h1 className={styles['signIn__h1']}>Sign in to access your Pokédex!</h1>
      <button className={styles['signIn__button']} onClick={() => logInAnonymously(setShowLoading)}><Facebook/>Continue as guest</button><br />
      <button className={styles['signIn__button']} onClick={() => logInWithGoogle(setShowLoading)}><Twitter/>Sign in with Google</button><br />
      <button className={styles['signIn__button']} onClick={() => logInWithTwitter(setShowLoading)}><Google/>Sign in with Twitter</button><br />
      <button className={styles['signIn__button']} onClick={() => logInWithFacebook(setShowLoading)}><User/>Sign in with Facebook</button><br />
    </div>
  )
}

export default SignIn
