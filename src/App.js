import React from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar';
import Context from './Contexts/Context';

const App = () => {
    return (
        <Context>
            <Navbar />
            <Modal />
        </Context>
    );
}

export default App;
