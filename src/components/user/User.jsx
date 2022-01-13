import React from 'react';

const User = (props) => {
    const {id, name}=props;
    return (
        <div>
            {id}--{name} 
        </div>
    );
};

export default User;