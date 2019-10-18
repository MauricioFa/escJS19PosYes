import React from 'react';
import { connect } from 'react-redux';
import InputEmail from '../components/InputEmail';

const Home = () => {
  return (
    <>
      <InputEmail variant='outlined' label='Correo electrónico' />
    </>
  );
};

export default connect(
  null,
  null
)(Home);
