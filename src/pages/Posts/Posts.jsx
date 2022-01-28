import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Post from "../../components/Post/Post";
import { postService } from "../../services/post.service";
import css from "./posts.module.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    postService.getAll().then((value) => setPosts([...value]));
  }, []);
  return (
    <div className={css.lr}>
      <div className={css.posts}><h3>Posts:</h3>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}</div>
      
      <div>
        <Outlet />
      </div>
      
      
    </div>
  );
};

export default Posts;
