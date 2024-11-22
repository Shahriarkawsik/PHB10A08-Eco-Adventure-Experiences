import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import React, { createContext, useEffect, useState } from "react";
import auth from "./../Firebase/firebase.init";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inputEmail, setInputEmail] = useState("");
  // Create a user
  const createUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // create User with Google
  const createUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // Login User with email
  const loginUser = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // reset Password
  const resetUserPassword = (email) => {
    // setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  /* Sign Out */
  const SignOutUser = () => {
    // setLoading(true);
    setUser(null);
    // setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (userInfo) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, userInfo);
  };
  // Current user authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // if (currentUser) {
      // }
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const [destination, setDestination] = useState("/");
  const AuthInfo = {
    createUser,
    createUserWithGoogle,
    loginUser,
    user,
    SignOutUser,
    loading,
    updateUserProfile,
    destination,
    setDestination,
    inputEmail,
    setInputEmail,
    resetUserPassword,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
