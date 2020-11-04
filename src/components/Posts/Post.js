import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import './Post.elements.css';

const Post = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState({});

    const handleImage = e => {
        setImage(e.target.files[0]);
    };
    
    return (
        <div className="posts">
            <div className="post">
                <form>
                    <div className="post-content">
                        <input type="text" name="post" id="post" placeholder="What are in your mind?" onChange={(e) => setTitle(e.target.value)} value={title} />
                    </div>
                    <div className="post-footer">
                        <div className="upload-file">
                            <label htmlFor="file">
                                <span className="sr-only">Upload</span>
                                <FaCamera className="camera-icon" />
                            </label>
                            <input type="file" className="file" id="file" onChange={handleImage} />
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

export default Post
