// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import app from './../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth =  getAuth(app)
const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();




// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [user,setUser]= useState(null);
    const [loading,setLoading]=useState(true)




    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


  const login =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut =()=>{
    setLoading(true);
    return signOut(auth);
  }



  const googleLogin=()=>{
    return signInWithPopup(auth, googleprovider)

  }


  const Githublogin =()=>{
    return signInWithPopup(auth, githubprovider)

  }


  const profileUpdate =(displayName,photoURL)=>{
    console.log(displayName,photoURL);
    return updateProfile(auth.currentUser, {
        displayName:{displayName}, photoURL:{photoURL}
      })
  }






  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
        setUser(loggedUser);
        setLoading(false);
    })

    return () => {
        unsubscribe();
    }
}, [])

    const authInfo = {
        createUser,
        login,
        user,
        loading,
        logOut,
        profileUpdate,
        googleLogin,
        Githublogin
   
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;