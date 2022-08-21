import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';
import '../styles/List.css'

const List = ({ posts }) => {


  return (
    <div className='list'>
      <div className='button'>
        <Link to="/post">
          <button>글쓰기</button>
        </Link>
      </div>
      {posts.map(post => (
        <ListItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default List;