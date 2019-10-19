import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import InputEmail from '../components/InputEmail';
import { PasswordTF } from '../components/Password';
import '../assets/styles/components/Login.scss';

const Login = () => {
  return (
    <div className='container-logInUpRpw'>
      <h1>Ingresa a la cuenta</h1>
      <form action='' method='get' className='form-logInUpRpw'>
        <InputEmail
          label='Correo electrónico'
          variant='outlined'
          className='component-inputEmail'
        />
        <PasswordTF
          textPlaceholder='Clave'
          helperText='Mínimo 8 caracteres'
          className='component-password'
        />
        <Button
          type='submit'
          color='primary'
          variant='contained'
          className='component-button'
        >
          INGRESAR
        </Button>
      </form>
      <Link to='/recoverPW' className='linkToRecoverPW-simpleTxt'>
        <h2>¿Recuperar contraseña?</h2>
      </Link>
      <div>
        <p>Si no tienes una cuenta</p>
        <Link to='/logUp' className='linkToLogUp-simpleTxt'>
          <h2>CREAR CUENTA</h2>
        </Link>
      </div>
    </div>
  );
};

export default Login;
