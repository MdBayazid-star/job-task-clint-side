import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  getIdToken,
  sendSignInLinkToEmail,
  EmailAuthProvider,
  linkWithCredential,
  isSignInWithEmailLink,
  signInWithEmailLink,
  reauthenticateWithCredential,
  fetchSignInMethodsForEmail
} from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // function for google signIn
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        userData(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/";
        // history.replace(destination);
        history(destination);
      })
      .catch((error) => {
        setAuthError(error.massage);
      })
      .finally(() => setIsLoading(false));
  };

  // Email authorization

//   const actionCodeSettings = {
//     url: '{https://www.example.com/finishSignUp?cartId=1234}',
//     handleCodeInApp: true,
//     iOS: {
//       bundleId: 'com.example.ios'
//     },
//     android: {
//       packageName: 'com.example.android',
//       installApp: true,
//       minimumVersion: '12'
//     },
//     dynamicLinkDomain: 'example.page.link'
//   };

//   sendSignInLinkToEmail(auth, user.email, actionCodeSettings)
//   .then(() => {
//     window.localStorage.setItem('emailForSignIn', user.email);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// if (isSignInWithEmailLink(auth, window.location.href)) {
//   let email = window.localStorage.getItem('emailForSignIn');
//   if (!email) {
//     email = window.prompt('Please provide your email for confirmation');
//   }
//   signInWithEmailLink(auth, email, window.location.href)
//     .then((result) => {
//       window.localStorage.removeItem('emailForSignIn');
//     })
//     .catch((error) => {
//     });
// }
// const credential = EmailAuthProvider.credentialWithLink(
//   user.email, window.location.href);
// reauthenticateWithCredential(auth.currentUser, credential)
//   .then((usercred) => {
//   })
//   .catch((error) => {
//   });
//   // After asking the user for their email.
// const email = window.prompt('Please provide your email');
// fetchSignInMethodsForEmail(auth, email)
//   .then((signInMethods) => {
//     if (signInMethods.indexOf(EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) != -1) {
//     }
//     if (signInMethods.indexOf(EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD) != -1) {
//     }
//   })
//   .catch((error) => {
//   });
  // hgug

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        userData(email, name, "POST");
        // sent name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        // history.replace("/");
        history("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Save User Information
  const userData = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://floating-plateau-21173.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // Login user with Email Password
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        // history.replace(destination);
        history(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // user observation
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // For Logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetch(`https://floating-plateau-21173.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);
  return {
    user,
    signInWithGoogle,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logout,
    admin,
    token,
  };
};

export default useFirebase;