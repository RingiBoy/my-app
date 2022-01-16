import React, { useState } from 'react';

import Users from "./components/users/Users"
import UserDetails from "./components/userDetails/UserDetails"
import Posts from "./components/posts/Posts"
import css from "./App.module.css"
import {postService} from './services/post.service'

const App = () => {

  const [user, setUser]=useState(null);
  // const [userId,setUserId]=useState(null);
  const [posts,setPosts]=useState([])
  
  const getUser = (userFromUserComp) =>{
    setUser(userFromUserComp)
    setPosts([])
  }

  const getUserId=(idFromUserDetailsComp)=>{
    console.log('idFromUserDetailsComp:', idFromUserDetailsComp)
    postService.getByUserId(idFromUserDetailsComp).then(newPosts=>setPosts([...newPosts]))
   
  }

  return (
    <div>
      <div className={css.wrap}>
        <Users getUser={getUser}/>
        {user&& <UserDetails user={user} getUserId={getUserId}/>}
      </div>
    {!!posts.length &&<Posts posts={posts}/>}

    </div>
  );
};

export default App;