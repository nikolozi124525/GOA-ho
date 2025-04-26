

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/logout">Logout</Link>
      </nav>
    </div>
  );
};

export default Home;

