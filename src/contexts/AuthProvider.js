import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app, db } from "../config/firebase";
import { useEffect } from "react";
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore/lite";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSideBarOn, setIsSidebarOn] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = async (email, password) => {
    const col1 = collection(db, "verifiedUser");
    const q = query(col1, where("email", "==", email));
    const snap = await getDocs(q);
    if (!snap.empty) {
      setVerified(true);
    }
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const authInfo = {
    createUser,
    updateUser,
    signInUser,
    user,
    loading,
    verified,
    logOut,
    isSideBarOn,
    setIsSidebarOn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
