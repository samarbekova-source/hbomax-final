import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { firestore, auth } from "../fire";
import fire from "../fire";

export const chatContext = React.createContext();

const ChatContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState("");

  function handleLogin(email, password, navigate) {
    setError("");
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate("/"))
      .catch((err) => setError(err.message));
  }

  const login = async (navigate) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    setCurrentUser(user);
    navigate("/");
  };

  function handleSignUp(email, password, navigate) {
    setError("");
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => handleLogin(email, password, navigate))
      .catch((err) => setError(err.message));
  }

  function handleLogout(navigate) {
    fire.auth().signOut();
    navigate("/");
  }
  function authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user.email);
      } else {
        setCurrentUser("");
      }
    });
  }
  useEffect(() => {
    authListener();
  }, []);
  return (
    <chatContext.Provider
      value={{
        currentUser,
        error,
        handleLogin,
        handleSignUp,
        handleLogout,
        login,
        firestore,
        auth,
      }}
    >
      {children}
    </chatContext.Provider>
  );
};
export default ChatContextProvider;
