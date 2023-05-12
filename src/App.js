// module
import React,{ useState, useRef, useCallback } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// components
import Posting from './components/Posting';
import List from './components/List';
import PostedView from './components/PostedView';
import Header from './components/Header'
import Wines from './components/Wines'

// json
import items from './items/post.json';
import menuItems from './items/menu.json';

// style
import './App.css'

const App = () => {

  // const [posts, setPosts] = useState([
  //   {
  //     id: 1,
  //     title: '1번 게시글',
  //     contents: '1번 내용',
  //     date: '22/03/22'
  //   },
  //   {
  //     id: 2,
  //     title: '2번 게시글',
  //     contents: '2번 내용',
  //     date: '22/03/22'
  //   },
  //   {
  //     id: 3,
  //     title: '3번 게시글',
  //     contents: '3번 내용',
  //     date: '22/03/22'
  //   }
  // ]);

  const [posts, setPosts] = useState(items.post);
  const [menus, setMenus] = useState(menuItems.menu);

  // useEffect(() => {
  //   console.log('JSON Object length: ',items.post.length);
  //   setPosts(items.post);
  // })

  const nextId = useRef(items.post.length+1);

  const getPostTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth()+1);
    const date = now.getDate();
    const posttime = `${year%2000}/${month}/${date}`;

    return posttime;
  };

  const onEdit = useCallback( (targetId, newContent) => {
    setPosts(
      posts.map((data) => 
        data.id === targetId ? { ...data, title: newContent.title, contents: newContent.contents, date: newContent.date } : data
      )
    );
  },[posts])

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
    } else{
      const post = {
        id: text.id,
        title: text.title,
        contents: text.contents,
        date: getPostTime(),
      };
      // 기존 배열에서 id가 같은 인덱스를 찾아서 수정
      onEdit(text.id, post);
    }
    
  }, [onEdit, posts]);

  // console.log("State: ",posts);

  // console.log("JSON: ",JSON.stringify(posts));

  return (
    <div className='main'>
      <div className="header">
        <Header menus={menus}/>
        <hr/>
      </div>
      
      
      <div className='container-wrap'>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route exact path="/home" element={<List posts={posts} />} />
          <Route path="/posting" element={<Posting posts={posts} onInsert={onInsert} />} />
          <Route path="/posting/:postId" element={<Posting posts={posts} onInsert={onInsert} />} />
          <Route path="/post/:postId" element={<PostedView posts={posts} onRemove={onRemove} />} />
          <Route path="/wines/:wine" element={<Wines/>} />
        </Routes>  
      </div>  
      
      <footer>
        <div className='footer1'>
          <a className='sendmail' href="mailto:jminkim@tecace.com">jminkim@tecace.com</a>
        </div>
        <div className='footer2'>
          작성자: 김정민
        </div>
        <div className='footer3'>
          <a className='link_git' href="https://github.com/KNIGHTWED/board.git">https://github.com/KNIGHTWED/board.git</a>
        </div>
      </footer>
    </div>
  );
};

export default App;