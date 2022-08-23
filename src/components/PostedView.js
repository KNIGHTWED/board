import React, {  useState, useEffect } from 'react';
import { Link, useParams  } from 'react-router-dom';
import '../styles/PostedView.css'

const PostedView = ({posts, onRemove}) => {
  
  const params = useParams();
  // console.log("params.postId의 타입은 "+typeof params.postId);
  const postId = params.postId*1;
  // console.log("postId의 타입은 "+typeof postId);
  const[posted, setPosted] = useState({
    id: "",
    title: "",
    contents: "",
    date: ""
  });
  useEffect(() => {
    posts.forEach(data => {
      if(data.id === postId){
        console.log("true");
        setPosted({
          ...data
        });
      }
    });
  },[posts, postId]);
  console.log(posted);

  return (
    <div className='form'>
      <div className='form-writer'>
        <div name='title' className='title' type='text' >{posted.title}</div>
        <div name='contents' className='contents' >{posted.contents}</div>
      </div>
      <div className='form-button'>
        <Link to="/posting/">
          <button className='button-modify' >수정</button>
        </Link>
        <Link to="/">
          <button className='button-remove' onClick={() => onRemove(postId)}>삭제</button>
        </Link>
      </div>
    </div>
  );
};

export default PostedView;