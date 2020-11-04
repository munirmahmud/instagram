import React from 'react';
import { useAuth } from '../../Contexts/AuthContext';
import './Post.elements.css';

const Posts = () => {
    const { posts } = useAuth();
    

    console.log(posts);
    return (
        <div className="posts">
            {posts.length ? posts.map(post => (
                <div className="post-content">
                <div className="header">
                    <div className="avatar">m</div>
                    <div className="username">{post.username}</div>
                </div>
                
                <div className="post-img">
                    <img src={post.image} alt={post.title} />
                </div>

                <div className="post-footer">
                    
                </div>
            </div>
            )) : (
                "Featching posts"
            )}
        </div>
    )
}

export default Posts
