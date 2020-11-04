import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { useAuth } from '../../Contexts/AuthContext';
import './CreatePost.elements.css';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState({});
    const { create } = useAuth();

    const handleImage = e => {
        setImage(e.target.files[0]);
    };

    const createPost = e => {
        e.preventDefault();
    
        create({ title, image });
        setTitle('');
        setImage('');
    };
    
    return (
        <div className="creat-post">
            <div className="post">
                <form onSubmit={createPost}>
                    <div className="post-content">
                        <textarea name="post" id="post" placeholder="What are in your mind?" value={title} onChange={(e) => setTitle(e.target.value)} cols="30" rows="4" />
                    </div>
                    <div className="create-post-footer">
                        <div className="upload-file">
                            <label htmlFor="file">
                                <span className="sr-only">Upload</span>
                                <FaCamera className="camera-icon" />
                            </label>
                            <input type="file" className="sr-only" id="file" onChange={handleImage} />
                            {image.name && <span>{image.name}</span>}                            
                        </div>
                        <div className="submit-post">
                            <button type="submit" className="btn btn-smart">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePost;
