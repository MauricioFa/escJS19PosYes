import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <section className='seccion-logUp-others'>
          <h2>O Regístrate con</h2>
          <span>
            <Link to='/API-google' className='section-logUp-link'>
              <FontAwesomeIcon icon={['fab', 'google']} />
            </Link>
            <Link to='/API-facebook' className='section-logUp-link'>
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </Link>
            <Link to='/API-twitter' className='section-logUp-link'>
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </Link>
          </span>
        </section>
        <Link to='/login' className='linkToLogin-logUp'>
          <h2>Iniciar sesión</h2>
        </Link>
      </div>
    </section>
  );
};

export default LogUp;
