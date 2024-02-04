/* eslint-disable no-unused-vars */
import {createContext, useContext, useState } from 'react'
import{createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, onAuthStateChanged} from 'firebase/auth'
import{auth, db} from '../Services/Firebase'


const AuthContext = createContext();

export function AuthContextProvider({Children}){
    const[user, setUser]= useState({})

    function signUp(email, password){
        createuser
    }


    return
       <AuthContext.Provider value={{}}>{Children}</AuthContext.Provider>;
}
export function UserAuth(){
    return useContext(AuthContext);
}