import React from 'react';
import { Link } from 'react-router-dom';
import './ListItem.css';
import cn from 'classnames';

const ListItem = ({ post }) => {
const { id, text, date } = post;

  return (
    <div className='ListItem'>
      <div className='Numbers'>{id}</div>
      <div className='text'><Link className='link' to={'/post/'+id}>{text}</Link></div>
      <div className='date'>{date}</div>
    </div>
  );
};

export default ListItem;