import React, {  useState, useEffect } from 'react';
import { Link, useParams  } from 'react-router-dom';
import '../styles/PostedView.css'

const PostedView = ({posts, onRemove}) => {
  
  const params = useParams();
  const postId = params.postId*1;

  const[posted, setPosted] = useState({
    id: "",
    title: "",
    contents: "",
    date: ""
  });
  useEffect(() => {
    posts.forEach(data => {
      if(data.id === postId){
        setPosted({
          ...data
        });
      }
    });
  },[posts, postId]);

  return (
    <div className='form'>
      <div className='form-writer'>
        <div name='title' className='title' type='text' >{posted.title}</div>
        <div name='contents' className='contents' >{posted.contents}</div>
      </div>
      <div className='form-button'>
        <Link to={`/posting/${postId}`}>
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