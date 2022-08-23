import React, { useState, useReducer, useCallback} from 'react';
import '../styles/Posting.css';
import { Link } from 'react-router-dom';

const Posting = ({ onInsert, posts }) => {
  const[text, setText] = useState({
    id: "",
    title: "",
    contents: "",
  });

  const onChangeText = useCallback(e => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
    console.log(text);
  },);

  const onClick = useCallback(e => {
    onInsert(text);

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

export default Posting;