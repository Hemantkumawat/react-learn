import React, { useContext } from 'react';

import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h2>Profile</h2>
            <p>{user ? `Welcome, ${user.username}` : 'Please login'}</p>
        </div>
    );
}
export default Profile;