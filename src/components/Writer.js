import React, { useState, useReducer, useCallback} from 'react';
import '../styles/Writer.css';
import { Link } from 'react-router-dom';

const Writer = ({ onInsert }) => {
  const[text, setText] = useState({
    title: "",
    contents: "",
    date: "",
  });

  const onChangeText = useCallback(e => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    })
    console.log(text);
  },);

  // 날짜 구하는 함수
  const getPostTime = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let date = now.getDay();

    // let posttime = (year%2000)+"/"+month+"/"+date;
    let posttime = `${year%2000}/${month}/${date}`;

    return posttime;
  }

  const onClick = useCallback(e => {
    console.log(typeof(getPostTime())+`: ${getPostTime()}`);
    const posttime = getPostTime();
    setText({
      ...text,
      date: `${getPostTime()}`,
    })
    onInsert(text)

    console.log(text);

  }, [onInsert, text]);

  return (
    <div className='form'>
      <div className='form-writer'>
        <input name='title' className='input-title' type='text' placeholder='제목' value={text.title} onChange={onChangeText} />
        <textarea name='contents' className='text-area' placeholder='내용' value={text.contents} onChange={onChangeText} />
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