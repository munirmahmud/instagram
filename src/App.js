import React from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar';
import Stories from './components/Stories/Stories';
import ContextProvider from './Contexts/AuthContext';

const App = () => {
    return (
        <ContextProvider>
            <Navbar />
            <Stories />
            <Modal />
        </ContextProvider>
    );
}

export default App;
