import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInAnonymously,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  linkWithRedirect,
  linkWithPopup,
  unlink,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { config } from "./config";

import { isDesktop } from "react-device-detect";

const app = initializeApp(config);
const auth = getAuth(app);
const db = getFirestore(app);

// Example: https://firebase.google.com/docs/auth/web/anonymous-auth
const logInAnonymously = async (setShowLoading) => {
  setShowLoading(true);
  try {
    await signInAnonymously(auth);
  } catch (err) {
    console.log(err);
  }
  setShowLoading(false);
};

// Example: https://firebase.google.com/docs/auth/web/google-signin
const logInWithGoogle = async (setShowLoading) => {
  setShowLoading(true);
  await signInWithProvider(new GoogleAuthProvider());
  setShowLoading(false);
};

// Example: https://firebase.google.com/docs/auth/web/twitter-login
const logInWithTwitter = async (setShowLoading) => {
  setShowLoading(true);
  await signInWithProvider(new TwitterAuthProvider());
  setShowLoading(false);
};

// Example: https://firebase.google.com/docs/auth/web/facebook-login
const logInWithFacebook = async (setShowLoading) => {
  setShowLoading(true);
  await signInWithProvider(new FacebookAuthProvider());
  setShowLoading(false);
};

const signInWithProvider = async (provider) => {
  // On Desktop, prompt user to sign in with the provider by opening a pop-up window to the provider's sign-in page.
  // On Mobile, prompt user to sign in with the provider by redirecting to the provider's sign-in page.
  if (isDesktop) {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      await signInWithRedirect(auth, provider);
      await getRedirectResult(auth);
    } catch (err) {
      console.log(err);
    }
  }
};

const logout = () => {
  try {
    signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

// Example: https://firebase.google.com/docs/auth/web/account-linking
const linkWithGoogle = async (setShowLoading) => {
  setShowLoading(true);
  await linkWithProvider(new GoogleAuthProvider());
  setShowLoading(false);
};

const linkWithTwitter = async (setShowLoading) => {
  setShowLoading(true);
  await linkWithProvider(new TwitterAuthProvider());
  setShowLoading(false);
};

const linkWithFacebook = async (setShowLoading) => {
  setShowLoading(true);
  await linkWithProvider(new FacebookAuthProvider());
  setShowLoading(false);
};

const linkWithProvider = async (provider) => {
  // Link account with the provider if the user is not already linked to the provider.
  if (
    !auth.currentUser.providerData.some(
      (currentProvider) => currentProvider.providerId === provider.providerId
    )
  ) {
    // On Desktop, prompt user to sign in with the provider by opening a pop-up window to the provider's sign-in page.
    // On Mobile, prompt user to sign in with the provider by redirecting to the provider's sign-in page.
    if (isDesktop) {
      try {
        await linkWithPopup(auth.currentUser, provider);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await linkWithRedirect(auth.currentUser, provider);
        await getRedirectResult(auth);
      } catch (err) {
        console.log(err);
      }
    }
  }
};

// Example: https://firebase.google.com/docs/auth/web/account-linking#unlink-an-auth-provider-from-a-user-account
const unlinkWithGoogle = async (setShowLoading) => {
  setShowLoading(true);
  await unlinkWithProvider(new GoogleAuthProvider());
  setShowLoading(false);
};

const unlinkWithTwitter = async (setShowLoading) => {
  setShowLoading(true);
  await unlinkWithProvider(new TwitterAuthProvider());
  setShowLoading(false);
};

const unlinkWithFacebook = async (setShowLoading) => {
  setShowLoading(true);
  await unlinkWithProvider(new FacebookAuthProvider());
  setShowLoading(false);
};

const unlinkWithProvider = async (provider) => {
  // Unlink provider only if the user is already linked to the specific provider.
  try {
    auth.currentUser.providerData.forEach(async (currentProvider) => {
      if (currentProvider.providerId === provider.providerId)
        await unlink(auth.currentUser, provider.providerId);
    });
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  db,
  linkWithGoogle,
  linkWithTwitter,
  linkWithFacebook,
  logInAnonymously,
  logInWithGoogle,
  logInWithTwitter,
  logInWithFacebook,
  logout,
  unlinkWithGoogle,
  unlinkWithTwitter,
  unlinkWithFacebook,
};
