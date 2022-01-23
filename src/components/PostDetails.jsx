import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../services/api.service';

const PostDetails = () => {
    
    let [post,setPost]=useState({});
    let apiService = new ApiService('posts');
    let {id}=useParams();

    useEffect(()=>{
        apiService.getSingleData(id).then(value=>setPost(value))
    },[id])
    
    return ( 
        <div>
            {post.id}--{post.title}
        </div>
    );
};

export default PostDetails;