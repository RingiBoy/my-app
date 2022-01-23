import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostComponents = ({item}) => {
    
    let {title,id}=item;

    let navigator = useNavigate();
    
    
    return (
        <div>
            {title}
            <button onClick={()=> navigator(id.toString())}>details</button>
        </div>
    );
};

export default PostComponents;