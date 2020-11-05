import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { IoMdPaperPlane } from 'react-icons/io';
import { useAuth } from '../../Contexts/AuthContext';
import { msToTime } from '../../helpers';
import Comments from '../Comments/Comments';
import './Post.elements.css';


const Posts = () => {
    const { posts } = useAuth();
    
    const getFirstLetter = name => {
        return name.substr(0, 1).toUpperCase();
    }

    return (
        <div className="posts">
            {posts.length ? posts.map(post => (
                <div key={post.id} className="post-content">
                    <div className="header">
                        <div className="avatar">{getFirstLetter(post.username)}</div>
                        <div className="username">{post.username}</div>
                    </div>
                    
                    <div className="post-img">
                        <img src={post.image} alt={post.title} />
                    </div>

                    <div className="post-footer">
                        <div className="post-icons">
                            <div className="favorites">
                                <AiOutlineHeart className="icon" />
                                <FaRegComment className="icon" />
                                <IoMdPaperPlane className="icon" />
                            </div>
                            <div className="bookmark">
                                <BiBookmark className="icon" />
                            </div>
                        </div>
                        <div className="post-details">
                            {post.title && <p>{post.title}</p>}

                            <time className="post-time" title="">
                                {post.postedTime && msToTime(post.postedTime)}
                            </time>
                        </div>
                        <Comments postId={post.id} />
                    </div>
                </div>

            )) : (
                "Featching posts"
            )}
        </div>
    )
}

export default Posts
