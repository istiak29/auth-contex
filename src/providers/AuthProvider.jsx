import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";




export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                console.log('observing current user inside useEffect', currentUser)
            }
        })
    }, [])
    
    const authInfo = {user, createUser, signInUser}

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