import React from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar';
import Post from './components/Posts/Post';
import Stories from './components/Stories/Stories';
import ContextProvider from './Contexts/AuthContext';

const App = () => {
    return (
        <ContextProvider>
            <Navbar />
            <div className="container mt-80">
                <Stories />
                <Post />
            </div>
            <Modal />
        </ContextProvider>
    );
}

export default App;
