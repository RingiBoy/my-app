import React from 'react';

const User = ({user, getUser}) => {
    
    return (
        <div>
            {user.id}--{user.name}--{user.username}
            <button onClick={()=>getUser(user)}>userDetails</button>
        </div>
    );
};

export default User;