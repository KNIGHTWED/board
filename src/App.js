import React,{ useState, useRef, useCallback } from 'react';
import Writer from './components/Writer';
import List from './components/List';
import './App.css'

import { Routes, Route, Link } from 'react-router-dom';

const App = () => {

  const [posts, setPosts] = useState([
    {
      id: 1,
      text: '1번 게시글',
      date: '22/03/22'
    },
    {
      id: 2,
      text: '2번 게시글',
      date: '22/03/22'
    },
    {
      id: 3,
      text: '3번 게시글',
      date: '22/03/22'
    }
  ])

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const post = {
        id: nextId.current,
        text,
        date: function(){
          let now = new Date();
          let year = now.getFullYear();
          let month = now.getMonth();
          let date = now.getDay();
          // let postdate = (year%2000)+"."+month+"."+date
          return (year%2000)+"."+month+"."+date;
          }
      };
      setPosts(posts.concat(post));
      nextId.current += 1;
    },
    [posts],
  )


  return (
    <div className='main'>
      <div className='header'>
        <Link to="/">게시판</Link>
      </div>
      
      <hr />
        
      <Routes>
        <Route exact path="/" element={<List posts={posts} />} />
        <Route path="/post" element={<Writer onInsert={onInsert}/>} />
      </Routes>
    </div>
  );
};

export default App;