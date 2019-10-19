import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => {
  return (
    <section className='section-NotFound'>
      <h1>Error 404</h1>
      <h2>Página no encontrada</h2>
      <Link to='/'>Volver al inicio</Link>
    </section>
  );
};

export default NotFound;
