import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { postService } from '../../services/post.service';

const PostDetails = () => {
const params = useParams();
    let {id} = params;
    const [post, setPost ]=useState(null)


    let {state}=useLocation();  //передаем объект в ктором есть стейт, котрый мы выдягивае деструктуризацией и далее используем, пихая в сетПост
    let navigate = useNavigate();  //принимает два пареметра, первый это ссылка, если хоме то /, и второй цифры от -1 это  нажал на одну страницу или 1 вперед



    useEffect(()=>{
        if(state){
            setPost(state)
            return
        }

        postService.detById(id).then(value=>setPost({...value}))
    },[id])



    const toHome=()=>{
        navigate('/')

    }
    
    const back=()=>{
        navigate(-1)
        
    }


    return (
        <div>
            <button onClick={toHome}>home</button>
            <button onClick={back}>back</button>
            {post&& (<div>
               <div>id:{post.id}</div> 
               <div>title:{post.title}</div> 
               <div>body:{post.body}</div> 
            </div>
            )}
        </div>
    );
};

export default PostDetails;