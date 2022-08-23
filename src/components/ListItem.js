import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ListItem.css';

const ListItem = ({ post }) => {
const { id, title, date } = post;

  return (
    <div className='ListItem'>
      <div className='Numbers'>{id}</div>
      <div className='text'><Link className='link' to={`/post/${id}`}>{title}</Link></div>
      <div className='date'>{date}</div>
    </div>
  );
};

export default ListItem;