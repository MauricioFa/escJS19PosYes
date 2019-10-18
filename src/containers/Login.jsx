import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import InputEmail from '../components/InputEmail';
import { PasswordTF } from '../components/Password';

const Login = () => {
  return (
    <>
      <h1>Ingresa a la cuenta</h1>
      <form action='' method='get' className='login-form'>
        <InputEmail label='Correo electrónico' variant='outlined' />
        <PasswordTF textPlaceholder='Clave' helperText='Mínimo 8 carácteres' />
        <Button type='submit' color='primary' variant='contained'>
          INGRESAR
        </Button>
      </form>
      <Link to='/recoverPW' className='linkToRecoverPW-simpleTxt'>
        ¿Recuperar contraseña?
      </Link>
      <p>Si no tienes una cuenta</p>
      <Link to='/logUp' className='linkToLogUp-simpleTxt'>
        CREAR CUENTA
      </Link>
    </>
  );
};

export default Login;
