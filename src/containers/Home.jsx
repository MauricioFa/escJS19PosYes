import React from 'react';
import { PasswordTF, PasswordFC } from '../components/Password';

const Home = () => {
  
  return (
    <>
      <PasswordTF textPlaceholder='Contraseña' />
      <PasswordFC textPlaceholder='Clave' />
    </>
  );
};

export default Home;
