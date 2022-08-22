import React,{ useState, useRef, useCallback } from 'react';
import Posting from './components/Posting';
import List from './components/List';
import PostedView from './components/PostedView'
import './App.css'

import { Routes, Route, Link, Navigate } from 'react-router-dom';

const App = ({ onView }) => {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '1번 게시글',
      contents: '1번 내용',
      date: '22/03/22'
    },
    {
      id: 2,
      title: '2번 게시글',
      contents: '2번 내용',
      date: '22/03/22'
    },
    {
      id: 3,
      title: '3번 게시글',
      contents: '3번 내용',
      date: '22/03/22'
    }
  ])

  const nextId = useRef(4);

  const getPostTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth()+1);
    const date = now.getDate();
    const posttime = `${year%2000}/${month}/${date}`;

    return posttime;
  }

  const onInsert = useCallback( text => {
      const post = {
        id: nextId.current,
        title: text.title,
        contents: text.contents,
        date: getPostTime(),
      };
      
      setPosts(posts.concat(post));
      nextId.current += 1;
      console.log(post);
    },
    [posts],
  )


  return (
    <div className='main'>
      <div className='header'>
        <Link className='home' to="/home">게시판</Link>
      </div>
      
      <hr />
        
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route exact path="/home" element={<List posts={posts} />} />
        <Route path="/posting" element={<Posting onInsert={onInsert} />} />
        <Route path="/post/:postId" element={<PostedView posts={posts}/>} />
      </Routes>
    </div>
  );
};

export default App;