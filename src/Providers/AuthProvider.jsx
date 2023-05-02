// eslint-disable-next-line no-unused-vars
import React, { createContext } from 'react';
import app from './../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const auth =  getAuth(app)




// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const createUser = (email, password) => {
    
        return createUserWithEmailAndPassword(auth, email, password);
    }



    const authInfo = {
        createUser,
   
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;