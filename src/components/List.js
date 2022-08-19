import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';
import './List.css'

const List = () => {
  return (
    <div className='list'>
      <div className='button'>
        <Link to="/post">
          <button>글쓰기</button>
        </Link>
      </div>
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
};

export default List;