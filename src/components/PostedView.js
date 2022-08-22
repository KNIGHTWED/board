import React, { useCallback, useState } from 'react';
import { Link, useLocation, useParams  } from 'react-router-dom';
import queryString from 'query-string';
import '../styles/PostedView.css'

const PostedView = ({posts}) => {
  
  const params = useParams();
  console.log(params.postId);
  const postId = params.postId - 1;

  // const[posted, setPosted] = useState({
  //   id: posts[params-1].id,
  //   title: posts[params-1].title,
  //   contents: posts[params-1].contents,
  //   date: posts[params-1].date,
  // });

  return (
    <div className='form'>
      <div className='form-writer'>
        <div name='title' className='title' type='text' placeholder='제목' >{posts[postId].title}</div>
        <div name='contents' className='contents' placeholder='내용' >{posts[postId].contents}</div>
      </div>
      <div className='form-button'>
        <Link to="/posting/">
          <button className='button-modify' >수정</button>
        </Link>
        <Link to="/">
          <button className='button-remove' >삭제</button>
        </Link>
      </div>
    </div>
  );
};

export default PostedView;