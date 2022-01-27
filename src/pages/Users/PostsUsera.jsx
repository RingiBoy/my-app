import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post2 from '../../components/Post/Post2';
import { usersService } from '../../services/user.service';

const PostsUsera = () => {
    
    const paramsPage = useParams();

  const { id } = paramsPage;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    usersService.gerPostsByIdUsers(id).then((value) => setPosts(value));
  }, []);

    
    
    
    return (
        <div>
            
      <h4>Posts by userId:</h4>
            {posts.map(post=><Post2 key={post.id} post={post}/>)} 
        </div>
    );
};

export default PostsUsera;