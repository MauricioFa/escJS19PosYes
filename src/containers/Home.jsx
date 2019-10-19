import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to='/login'>Login</Link>
      <br />
      <Link to='/logUp'>LogUp</Link>
    </>
  );
};

export default Home;
