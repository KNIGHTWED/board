import React from 'react';
import Writer from './components/Writer';
import List from './components/List';
import './App.css'

import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='main'>
      <div className='header'>
        <Link to="/">게시판</Link>
      </div>
      
      <hr />
        
      <Routes>
        <Route exact path="/" element={<List />} />
        <Route path="/post" element={<Writer />} />
      </Routes>
    </div>
  );
};

export default App;