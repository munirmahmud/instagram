import React from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar';
import ContextProvider from './Contexts/AuthContext';

const App = () => {
    return (
        <ContextProvider>
            <Navbar />
            <Modal />
        </ContextProvider>
    );
}

export default App;
