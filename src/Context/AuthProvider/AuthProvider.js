import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const google = () => {
        return signInWithPopup(auth, googleProvider)
    }


    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email and password
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const Logout = () => {
        return signOut(auth)
    }

    useState(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        createUser,
        updateUser,
        login,
        Logout,
        loading,
        google,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;