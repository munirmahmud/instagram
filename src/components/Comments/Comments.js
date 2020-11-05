import React, { useEffect, useState } from 'react';
import { db } from '../../config';
import { useAuth } from '../../Contexts/AuthContext';
import './Comment.elements.css';

const Comments = ({ postId }) => {
    const { loader, user, publishComment } = useAuth();
    const [state, setState] = useState('');
    const [comments, setComments] = useState([]);

    const postComment = (e) => {
        e.preventDefault();
        
        publishComment({
            id: postId,
            comment: state
        });

        setState('');
    };

    useEffect(() => {
        db.collection('posts').doc(postId).collection('comments').orderBy('currentTime', 'desc').onSnapshot(snapshot => {
            setComments(snapshot.docs.map(doc => doc.data()));
        });
    }, []);

    console.log(comments);
    
    return (
        <div className="comments">
            <div className="comments-wrapper">
                {comments && comments.map(comment => (
                    <div key={comment.id} className="comment-content">
                        <strong>{comment.username} </strong>
                        {comment.comment}
                    </div>
                ))}
            </div>
            {!loader && user ? (
                <form className="comment-form" onSubmit={postComment}>
                    <textarea name="comment" cols="30" rows="2" placeholder="Add comment..." onChange={e => setState(e.target.value)} value={state} />
                    <button type="submit">Post</button>
                </form>
            ) : (
                ""
            )}
        </div>
    )
}

export default Comments;
