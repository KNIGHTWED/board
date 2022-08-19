import React from 'react';

import './ListItem.css'


const ListItem = () => {

  return (
    <div className='ListItem'>
      <div className='Numbers'>
        1
        <div className='text'>게시글</div>
      </div>
      <div className='date'>00.00.00</div>
    </div>
  );
};

export default ListItem;