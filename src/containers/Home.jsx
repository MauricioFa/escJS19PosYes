import React from 'react';
import { PasswordTF, PasswordFC } from '../components/Password';

const Home = () => {
  
  return (
    <>
      <PasswordFC textPlaceholder='Contraseña' />
      <PasswordTF textPlaceholder='Clave' helperText='Mínimo 8 carácteres' />
    </>
  );
};

export default Home;
