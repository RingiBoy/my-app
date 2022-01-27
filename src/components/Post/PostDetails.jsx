import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { postService } from "../../services/post.service";

const PostDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  let { id } = params;
  const [post, setPost] = useState(null);

  let { state } = useLocation(); //передаем объект в ктором есть стейт, котрый мы выдягивае деструктуризацией и далее используем, пихая в сетПост
  
  useEffect(() => {
    if (state) {
      setPost(state);
      return;
    }

    postService.detById(id).then((value) => setPost({ ...value }));
  }, [id]);

  

  return (
    <div>
     
      {post && (
        <div>
          <h5>Post details:</h5>
          <div>id:{post.id}</div>
          <div>title:{post.title}</div>
          <div>body:{post.body}</div>
          <br/> 
          <Button onClick={()=>{
            navigate(`/posts/${post.id}/comments`);
          }}>
          
          Показать все комменты этого поста</Button>
        </div>
        
      )}
      <Outlet/>
    </div>
  );
};

export default PostDetails;
