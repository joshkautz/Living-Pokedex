import {
  doc,
  updateDoc,
  getDoc,
  setDoc,
  getFirestore,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { isDesktop } from "react-device-detect";

import {
  GoogleAuthProvider,
  TwitterAuthProvider,
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
const firestore = getFirestore(app);

// const getPokedexDocument = (user) => {
//   return doc(firestore, "pokedex", user.uid);
// };

const getPokedexDocument = (user) => {
  if (user) {
    const docRef = doc(firestore, "pokedex", user.uid);

    getDoc(docRef).then((docSnap) => {
      if (!docSnap.exists()) setDoc(docRef, {});
    });

    return docRef;
  } else {
    return;
  }
};

const updatePokedexDocument = async (user, id, state) => {
  await updateDoc(doc(firestore, "pokedex", user.uid), {
    [id]: state,
  });
};

// Example: https://firebase.google.com/docs/auth/web/anonymous-auth
const logInAnonymously = async () => {
  try {
    await signInAnonymously(auth);
  } catch (err) {
    console.log(err);
  }
};

// Example: https://firebase.google.com/docs/auth/web/google-signin
const logInWithGoogle = async () => {
  await signInWithProvider(new GoogleAuthProvider());
};

// Example: https://firebase.google.com/docs/auth/web/twitter-login
const logInWithTwitter = async () => {
  await signInWithProvider(new TwitterAuthProvider());
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
  getPokedexDocument,
  updatePokedexDocument,
  linkWithGoogle,
  linkWithTwitter,
  logInAnonymously,
  logInWithGoogle,
  logInWithTwitter,
  logout,
  unlinkWithGoogle,
  unlinkWithTwitter,
};
