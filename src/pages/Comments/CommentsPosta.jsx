import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../../components/Comment/Comment";

import { postService } from "../../services/post.service";
const CommentsPosta = () => {
  const paramsPage = useParams();

  const { id } = paramsPage;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    postService.getCommentsByIdPost(id).then((value) => setComments(value));
  }, []);

  return (
    <div>
      @commentsPosta
      <hr />
      <h4>Comments by post id:</h4>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsPosta;
