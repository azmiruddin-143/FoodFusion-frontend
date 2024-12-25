import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase Setup/Firebase.init';
import axios from 'axios';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    const [user, setuser] = useState(null)
    const [loader, setLoader] = useState(true)
    const provider = new GoogleAuthProvider();
    // google user//

    const googleRegister = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)

    }
    // create User//
    const registerUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login User //

    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogout = () => {
        return signOut(auth)

    }

    const myProfileUpdate = (profileUpdate) => {
        setLoader(true)
        return updateProfile(auth.currentUser, profileUpdate)
    }



    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('https://server-food-ochre.vercel.app/jwt', user, {
                    withCredentials: true
                })
                    .then(result => {
                        console.log(result.data);
                    })
            } else {
                axios.post('https://server-food-ochre.vercel.app/logout', {}, {
                    withCredentials: true
                })
                    .then(result => {
                        console.log("logout", result.data);
                    })
            }
            setLoader(false)

        })
        return () => {
            return unsubscibe()
        }
    }, [])

    useEffect(() => {
        if (user) {
            setLoader(false)
        }

    }, [user])



    const authObjct = {
        registerUser,
        googleRegister,
        loginUser,
        userLogout,
        myProfileUpdate,
        user,
        setuser,
        loader,
    }

    return (
        <div>
            <AuthContext.Provider value={authObjct}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;