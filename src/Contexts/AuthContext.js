import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../config';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

const ContextProvider = ({ children }) => {
    const [modal, setModal] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const openModal = () => {
        return setModal(true);
    };

    const closeModal = () => {
        return setModal(false);
    };

    const register = async user => {
        const {username, email, password} = user;

        try {
            setError('');
            const res = await auth.createUserWithEmailAndPassword(email, password);
            res.user.updateProfile({ displayName: username });

            setModal(false);
        } catch(error) {
            setError(error.message);
        }
    };

    const login = async user => {
        const {email, password} = user;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setModal(false);
        } catch (error) {
            setError(error.message);
        }
    };

    const logout = () => {
        auth.signOut().then(function() {
            setUser(null);
        }).catch(error => {
            setError(error.message);

        });
    };

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoader(false);
        })
    }, []);

    return (
        <AuthContext.Provider value={{ modal, openModal, closeModal, register, error, login, user, loader, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider;
