import firebase from 'firebase';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db, storage } from '../config';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

const ContextProvider = ({ children }) => {
    const [modal, setModal] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [posts, setPosts] = useState([]);

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

    const create = data => {
        const { title, image } = data;
        const uploadFile = storage.ref(`images/${image.name}`).put(image);

        uploadFile.on("state_changed", (snapshot) => {

            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            
        }, (error) => {
            setError(error);
        }, () => {
            storage.ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    db.collection('posts').add({
                        title,
                        image: url,
                        username: user.displayName,
                        currentTime: firebase.firestore.FieldValue.serverTimestamp()
                    });
                });
        });
    };

    const publishComment = (data) => {
        const {id, comment} = data;

        db.collection('posts').doc(id).collection('comments').add({
            comment,
            username: user.displayName,
            currentTime: firebase.firestore.FieldValue.serverTimestamp(),
        });
        
    };

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoader(false);
        });

        db.collection('posts')
            .orderBy('currentTime', 'desc')
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    title: doc.data().title,
                    image: doc.data().image,
                    username: doc.data().username,
                    postedTime: doc.data().currentTime.seconds,
                })));
            });
    }, []);

    return (
        <AuthContext.Provider value={{ modal, openModal, closeModal, register, error, login, user, loader, logout, create, posts, publishComment }}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider;
