import React from "react";

const Comment = ({ comment }) => {
  const { id, name, email, body,postId } = comment;
  return (
    <div>
      <p>id: {id} - POSTID:{postId}</p>
      <p> NAME: {name} </p>
      <p>EMAIL: {email}</p>
      <p>BODY: {body}</p>
    </div>
  );
};

export default Comment;
