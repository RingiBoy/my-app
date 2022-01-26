import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Post from "../../components/Post/Post";
import { postService } from "../../services/post.service";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    postService.getAll().then((value) => setPosts([...value]));
  }, []);
  return (
    <div>
      <div>
        <Outlet />
      </div>
      <h3>Posts:</h3>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
