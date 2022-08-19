import React from 'react';

const Template = ({ children }) => {
  return (
    <div className='Template'>
      <div className='title'></div>
      <div className='content'>{children}</div>
    </div>
  );
};

export default Template;