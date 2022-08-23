import React,{ useState, useRef, useCallback } from 'react';
import Posting from './components/Posting';
import List from './components/List';
import PostedView from './components/PostedView'
import './App.css'

import { Routes, Route, Link, Navigate } from 'react-router-dom';

const App = () => {

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
  ]);

  const nextId = useRef(4);

  const getPostTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth()+1);
    const date = now.getDate();
    const posttime = `${year%2000}/${month}/${date}`;

    return posttime;
  };

  // const onEdit = (targetId, newContent) => {
  //   setPosts(
  //     posts.map((data) => 
  //       data.id === targetId ? { ...data, title: newContent.title, contents: newContent.contents, date: newContent.date } : data
  //     )
  //   );
  // };

  const onEdit = useCallback( (targetId, newContent) => {
    setPosts(
      posts.map((data) => 
        data.id === targetId ? { ...data, title: newContent.title, contents: newContent.contents, date: newContent.date } : data
      )
    );
  })

  const onRemove = useCallback( id => {
    setPosts(posts.filter(post => post.id !==id));
  }, [posts]);

  const onInsert = useCallback( text => {
    if(text.id ===""){
      const post = {
        id: nextId.current,
        title: text.title,
        contents: text.contents,
        date: getPostTime(),
      };
      // 기존 배열에 새로 추가
      setPosts(posts.concat(post));
        
      nextId.current += 1;
      console.log(post);
    } else{
      const post = {
        id: text.id,
        title: text.title,
        contents: text.contents,
        date: getPostTime(),
      };
      // 기존 배열에서 id가 같은 인덱스를 찾아서 수정
      onEdit(text.id, post);
      
      console.log(post);
    }
    
    
  }, [onEdit, posts]);


  return (
    <div className='main'>
      <header className='header'>
        <Link className='home' to="/home">게시판</Link>
        <hr />
      </header>
      
      <div className='container-wrap'>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route exact path="/home" element={<List posts={posts} />} />
          <Route path="/posting" element={<Posting posts={posts} onInsert={onInsert} />} />
          <Route path="/post/:postId" element={<PostedView posts={posts} onRemove={onRemove}/>} />
        </Routes>  
      </div>  
      
      <footer>
        <div className='footer1'>
          이메일 주소
        </div>
        <div className='footer2'>
          작성자: 김정민
        </div>
        <div className='footer3'>
          깃주소
        </div>
      </footer>
    </div>
  );
};

export default App;