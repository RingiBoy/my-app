import React from 'react';

const Post = ({post}) => {
    
    const {id,title,body}=post;

    return (
        <div>
           <div>idPost:{id}</div>
           <div>title: {title}</div>
           <div>body:{body}</div>
           
        </div>
    );
};

export default Post;