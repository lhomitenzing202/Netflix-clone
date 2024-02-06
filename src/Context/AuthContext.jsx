
import {createContext, useContext, useEffect, useState } from 'react'
import{createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, onAuthStateChanged} from 'firebase/auth'
import{auth, db} from '../Services/Firebase'


const AuthContext = createContext();

export function AuthContextProvider({Children}){
    const[user, setUser]= useState({})

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return (()=>{
            unsubscribe();
        });
    },[]);

    function signUp(email, password){
        createUserWithEmailAndPassword(auth, email,password);
    }

    function login(email, password){
        signInWithEmailAndPassword(auth, email,password);
    }

    function logOut(){
        signOut(auth);
    }


    return
       // eslint-disable-next-line no-unreachable
       <AuthContext.Provider value={{user,signUp,login,logOut}}>{Children}</AuthContext.Provider>;
}
export function UserAuth(){
    return useContext(AuthContext);
}