import React, { useState, useReducer, useCallback} from 'react';
import '../styles/Writer.css';
import { Link } from 'react-router-dom';

const Writer = ({ onInsert }) => {
  const[title, setTitle] = useState('')
  const[contents, setContents] = useState('')

  const onChangeTitle = useCallback(e => {
    setTitle(e.target.value);
    console.log(e.target.value);
  }, []);
  const onChangeContents = useCallback(e => {
    setContents(e.target.value);
    console.log(e.target.value);
  }, []);

  const onClick = useCallback(e => {
    // 버튼누르면 저장
    // 날짜 구하는 함수 따로 만들기
    // let now = new Date();
    // let year = now.getFullYear();
    // let month = now.getMonth();
    // let date = now.getDay();
    // let postdate = (year%2000)+"."+month+"."+date
    // console.log((year%2000)+"."+month+"."+date);
    // onInsert{title};


  }, []);

  return (
    <div className='form'>
      <div className='form-writer'>
        <input className='input-title' type='text' placeholder='제목' value={title} onChange={onChangeTitle}/>
        <textarea className='text-area' placeholder='내용' value={contents}></textarea>
      </div>
      <div className='form-button'>
        <Link to="/">
          <button className='button-submit' onClick={onClick}>저장</button>
        </Link>
      </div>
    </div>
  );
};

export default Writer;