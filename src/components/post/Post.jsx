import React from 'react';

const Post = (porps) => {
    const {id, title} = porps;
    return (
        <div>
        {id} - {title}   
        </div>
    );
};

export default Post;