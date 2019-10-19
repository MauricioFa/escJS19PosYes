import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to='/login'>Login</Link>
      <br />
      <br />
      <br />
      <Link to='/logUp'>LogUp</Link>
      <br />
      <br />
      <br />
      <Link to='/recoverPW'>Recover Password</Link>
    </>
  );
};

export default Home;
