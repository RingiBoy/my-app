import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Comment from "../../components/Comment/Comment";
import { commentService } from "../../services/comments.service";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
      commentService.getAll().then(comments=>setComments(comments))
  }, []);

  return( 
  <div>
    @comments
      {comments.map(value=><Comment comment={value}/>)}
      
      </div>);
  };

export default Comments;
