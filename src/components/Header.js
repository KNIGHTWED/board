import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = ({menus}) => {
  
  return (
    <div className='Header'>
        <div className='Left'></div>
        <div className='Center'>게시판</div>
        <div className='Right'>
            {menus.map(menu => (
            <Link className='menuItem' key={menu.name} to={menu.link}>{menu.name}</Link>
            ))}
        </div>
    </div>
  );
};

export default Header;