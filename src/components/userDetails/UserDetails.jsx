import React from 'react';

import css from './UserDetails.module.css'
const UserDetails = ({user, getUserId}) => {

    return (
        <div className='css.wrap'>
        <div>{user?.id}</div>
        <div>{user?.name}</div>
        <div>{user?.username}</div>
        <div>{user?.address.street}</div>
        <button onClick={()=>{getUserId(user.id)}}>get Posts</button>
        </div>
    );
};

export default UserDetails;