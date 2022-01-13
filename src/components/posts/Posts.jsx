import React, { useEffect, useState } from 'react';
import Post from '../post/Post';

const Posts = () => {
const [posts, setPosts]=useState([]);
useEffect(()=>{    
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value=>value.json()) //получаем с джейсон данные
    .then(value=>setPosts(value)) //сетаем данные в постс
},[])



    return (
        <div>
            {posts.map(value=><Post id={value.id} title={value.title} />)}
        </div>
    );
};

export default Posts;