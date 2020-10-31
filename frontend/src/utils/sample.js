import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ auth, children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const signup = async (email, password, onSuccess = null, onError = null) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(onSuccess)
      .catch(onError);
  };

  const signin = async (email, password, onSuccess = null, onError = null) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(onSuccess)
      .catch(onError);
  };

  const signout = async () => {
    await auth.signOut();
  };

  useEffect(() => auth.onAuthStateChanged(setCurrentUser), []);

  return (
    <AuthContext.Provider
      value={{ currentUser, signup, signin, signout, userInfo, setUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};
