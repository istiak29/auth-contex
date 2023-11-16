import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";




export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    // loading fix
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false);
                console.log('observing current user inside useEffect', currentUser)
            }
        })

        return () => {
            unsubscribe
        }

    }, [])


    const authInfo = {user, createUser, signInUser, logOut, loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}