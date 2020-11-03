import React, { createContext, useContext, useState } from 'react';

const ContextProvider = createContext();

export function useModalContext() {
    return useContext(ContextProvider);
}

const Context = ({ children }) => {
    const [modal, setModal] = useState(false);
    const openModal = () => {
        return setModal(true);
    };

    const closeModal = () => {
        return setModal(false);
    };

    return (
        <ContextProvider.Provider value={{ modal, openModal, closeModal }}>
            {children}
        </ContextProvider.Provider>
    )
}

export default Context;
