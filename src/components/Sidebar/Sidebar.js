import React, { useState } from 'react';
import { useAuth } from '../../Contexts/AuthContext';
import { getFirstLetter } from '../../helpers';
import './Sidebar.elements.css';

const Sidebar = () => {
    const { loader, user } = useAuth();
    const username = !loader && user ? user.displayName : '';
    const [state] = useState([
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
        <aside className="sidebar">
            {!loader && user ? (
                <div className="user-profile">
                    <div className="sidebar-user-avatar"><span>{getFirstLetter(username)}</span></div>
                    <div className="sidebar-user-name">{username}</div>
                </div>
            ) : ""}

            <div className="suggested-profiles">
                <div className="profile-header">
                    <h3>Suggestions For You</h3>
                    <span>See All</span>
                </div>

                <div className="profile-lists">
                    {state.length && state.map(profile => (
                        <div key={profile.id} className="profile-list">
                            <div className="profile-info">
                                <div className="profile-avatar">
                                    <span><img src={profile.image} alt={profile.name} /></span>
                                </div>
                                <div className="profile-name">
                                    {profile.name}
                                </div>
                            </div>

                            <div className="follow-user">
                                Follow
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
