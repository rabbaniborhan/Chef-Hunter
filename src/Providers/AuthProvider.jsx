// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import app from './../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const auth =  getAuth(app)




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
        logOut
   
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;