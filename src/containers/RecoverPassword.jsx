import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import InputEmail from '../components/InputEmail';
import '../assets/styles/components/RecoverPassword.scss';

const RecoverPassword = () => {
  return (
    <section className='section-Rpw'>
      <div className='container-Rpw'>
        <h1>Recuperar la contraseña</h1>
        <form action='' method='get' className='form-Rpw'>
          <InputEmail
            label='Correo electrónico'
            variant='outlined'
            className='component-inputEmail'
          />
          <Button
            type='submit'
            color='primary'
            variant='contained'
            className='component-button'
          >
            RESTABLECER
          </Button>
        </form>
        <Link to='/login' className='linkToLogin-Rpw'>
          <h2>Volver a iniciar de sesión</h2>
        </Link>
        <div>
          <p className='linkToLogUp-Rpw'>Si no tienes una cuenta</p>
          <Link to='/logUp'>
            <h2>CREAR CUENTA</h2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecoverPassword;
