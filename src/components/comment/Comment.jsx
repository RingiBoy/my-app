import React from 'react';

const Comment = (props) => {
    const {id, name, email}=props;
    return (
        <div>
            {id}-{name}- {email}
        </div>
    );
};

export default Comment;