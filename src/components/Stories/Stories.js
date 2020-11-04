import React, { useState } from 'react';
import './Stories.elements.css';

const Stories = () => {
    const [stories, setStories] = useState([
        {id: 1, image: './images/thumb-1.jpg', name: 'Aayan Mahmud'},
        {id: 2, image: './images/thumb-2.jpg', name: 'Adam'},
        {id: 3, image: './images/thumb-3.jpg', name: 'Leondra'},
        {id: 4, image: './images/thumb-4.jpg', name: 'Whitney'},
        {id: 5, image: './images/thumb-5.jpg', name: 'James Bond'},
        {id: 6, image: './images/thumb-6.jpg', name: 'Alhertine'},
        {id: 7, image: './images/thumb-7.jpg', name: 'Munir Mahmud'},
        {id: 8, image: './images/thumb-8.jpg', name: 'Glidal Men'},
        {id: 9, image: './images/thumb-9.jpg', name: 'Marianna'},
    ]);

    return (
        <div className="container mt-80">
            <div className="stories">
                {stories && stories.map(user => (
                    <div key={user.id} className="story_info">
                        <div className="story-image">
                            <span>
                                <img src={user.image} alt={user.name} />
                            </span>
                        </div>
                        <div className="story_name">{user.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stories;
