import React, { createContext, useContext, useState } from 'react';
import { auth } from '../config';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

const ContextProvider = ({ children }) => {
    const [modal, setModal] = useState(false);
    const [error, setError] = useState('');
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
    }

    return (
        <AuthContext.Provider value={{ modal, openModal, closeModal, register, error, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider;
