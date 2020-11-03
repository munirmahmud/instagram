import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Context from './Contexts/Context';

const App = () => {
    return (
        <Context>
            <Navbar />
        </Context>
    );
}

export default App;
