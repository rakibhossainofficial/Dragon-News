import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  //Register 
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign in 
  const userSignIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  //sign out 
  const userSignout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    userRegister,
    userSignIn,
    userSignout,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
