import React, { useState } from 'react';
import { useAuth } from '../../Contexts/AuthContext';
import './Comment.elements.css';

const Comments = () => {
    const { loader, user } = useAuth();
    const [state, setState] = useState('');
    
    return (
        <div className="comments">
            <div className="comment-form">
                <textarea name="comment" id="comment" cols="30" rows="3" placeholder="Add comment..." />
            </div>

        </div>
    )
}

export default Comments;
