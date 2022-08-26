import { doc, updateDoc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// eslint-disable-next-line
import { getAnalytics, logEvent } from "firebase/analytics";
import { getFirestore, onSnapshot } from "firebase/firestore";
import { isDesktop } from "react-device-detect";

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

const firebaseConfig = {
  apiKey: "AIzaSyBPN-xAhCAIOsHsX19tHKyO-ysdwjUqH4Q",
  authDomain: "living-pokedex-de070.firebaseapp.com",
  projectId: "living-pokedex-de070",
  storageBucket: "living-pokedex-de070.appspot.com",
  messagingSenderId: "285902590177",
  appId: "1:285902590177:web:20cbcbecea8842b18fa7a0",
  measurementId: "G-PCLLVY5FNP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// eslint-disable-next-line
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

// Example: https://firebase.google.com/docs/firestore/query-data/get-data#get_multiple_documents_from_a_collection
const listenToFirestore = (setPokedex, setShowLoading, user) => {
  setShowLoading(true);

  if (user === undefined || user === null) {
    setPokedex({});
    return;
  }

  onSnapshot(
    doc(firestore, "pokedex", user.uid),
    (document) => {
      setShowLoading(false);
      setPokedex(document.data());
      if (document.data() === undefined)
        setDoc(doc(firestore, "pokedex", user.uid), {});
    },
    (error) => {
      setShowLoading(false);
      setPokedex({});
    }
  );
};

const updatePokedex = (user, id, state) => {
  try {
    updateDoc(doc(firestore, "pokedex", user.uid), {
      [id]: state,
    });
  } catch (err) {
    console.log(err);
  }
};

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
  updatePokedex,
  listenToFirestore,
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
