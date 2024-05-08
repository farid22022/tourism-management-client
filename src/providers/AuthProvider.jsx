import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const gitHubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed',currentUser);
            setUser(currentUser);
        })
        return ()=>{
            unSubscribe();
            setLoading(false)
        }
    });

    console.log(user)
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleLogin,
        gitHubLogin
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;