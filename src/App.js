import React,{ useState, useRef, useCallback } from 'react';
import Writer from './components/Writer';
import List from './components/List';
import './App.css'

import { Routes, Route, Link, Navigate } from 'react-router-dom';

const App = () => {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '1번 게시글',
      contents: '',
      date: '22/03/22'
    },
    {
      id: 2,
      title: '2번 게시글',
      contents: '',
      date: '22/03/22'
    },
    {
      id: 3,
      title: '3번 게시글',
      contents: '',
      date: '22/03/22'
    }
  ])

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const post = {
        id: nextId.current,
        title: text.title,
        contents: text.contents,
        date: text.date,
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
        <Link to="/home">게시판</Link>
      </div>
      
      <hr />
        
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace/>} />
        <Route exact path="/home" element={<List posts={posts} />} />
        <Route path="/post" element={<Writer onInsert={onInsert}/>} />
      </Routes>
    </div>
  );
};

export default App;