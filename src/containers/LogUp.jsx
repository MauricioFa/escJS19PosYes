import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import InputEmail from '../components/InputEmail';
import { PasswordTF } from '../components/Password';
import '../assets/styles/components/LogUp.scss';

const LogUp = () => {
  return (
    <section className='section-logUp'>
      <div className='container-logUp'>
        <h1>Crea tu cuenta</h1>
        <form action='' method='get' className='form-logUp'>
          <InputEmail
            label='Correo electrónico'
            variant='outlined'
            className='component-inputEmail'
          />
          <PasswordTF
            textPlaceholder='Ingresa la contraseña'
            helperText='Mínimo 8 caracteres'
            className='component-password'
            id='logUp-password-1'
          />
          <PasswordTF
            textPlaceholder='Repite la misma clave'
            helperText='Mínimo 8 caracteres'
            className='component-password'
            id='logUp-password-2'
          />
          <Button
            type='submit'
            color='primary'
            variant='contained'
            className='component-button'
          >
            CREAR CUENTA
          </Button>
        </form>
        <Link to='/recoverPW' className='linkToRpw-logUp'>
          <h2>O ingresa usando</h2>
        </Link>
        <div>
          <Link to='/login' className='linkToLogin-logUp'>
            <h3>Iniciar sesión</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogUp;
