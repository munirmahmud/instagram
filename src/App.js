import React from 'react';
import './App.css';
import CreatePost from './components/CreatePost/CreatePost';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Posts/Posts';
import Stories from './components/Stories/Stories';
import ContextProvider from './Contexts/AuthContext';

const App = () => {
    return (
        <ContextProvider>
            <Navbar />
            <div className="container mt-80">
                <Stories />
                <CreatePost />
                <Posts />
            </div>
            <Modal />
        </ContextProvider>
    );
}

export default App;
