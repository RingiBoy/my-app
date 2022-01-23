import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import PostComponents from '../../components/PostComponents';
import ApiService from '../../services/api.service';

const Posts = () => {
    
    let apiService = new ApiService('posts');

    const [posts,setPosts]=useState([])

    useEffect(()=>{
        apiService.getAllData().then(value=>setPosts(value));

    },[])
    
    
    return (
        <div> 
            <Outlet/>
            {
           posts.map(value => <PostComponents key={value.id} item={value}/>)
            }

            
           </div>
    );
};

export default Posts;