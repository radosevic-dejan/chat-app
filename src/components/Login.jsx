import React from "react";
import { auth } from "../firebase/firebaseDb";
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const signIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

export const Login = () => {
    const [ user ] = useAuthState(auth);
    console.log(user)
  return <div className="py-1 pr-2">
    <GoogleButton onClick={ signIn }/>
  </div>;
};
