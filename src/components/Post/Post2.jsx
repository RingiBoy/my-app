import React from "react";

const Post2 = ({ post }) => {
  let { title, id, userId } = post;

  return (
    <div>
      <div> userId:{userId}</div>
      <div>id:{id}</div>
      <div>title:{title}</div>
    </div>
  );
};

export default Post2;
