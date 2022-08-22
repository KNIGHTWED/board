import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';
import '../styles/List.css'

const List = ({ posts }) => {

  return (
    <div className='list'>
      <div className='button'>
        <Link to="/posting">
          <button>글쓰기</button>
        </Link>
      </div>
      <div className='title_class'>
        <div className='title_class Numbers'>No</div>
        <div className='title_class text'>제목</div>
        <div className='title_class date'>날짜</div>
      </div>
      {posts.map(post => (
        <ListItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default List;