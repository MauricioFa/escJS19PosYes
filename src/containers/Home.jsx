import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';

const Home = (props) => {
  const { loginOn } = props;
  return (
    <>
      {loginOn ? (
        <h1>
          <span>Home login ON </span>
          <FontAwesomeIcon icon={['fas', 'code-branch']} />
        </h1>
      ) : (
        <h1>
          <span>Home login OFF </span>
          <FontAwesomeIcon icon={['fab', 'github']} />
        </h1>
      )}
      <Button variant='contained' color='primary'>
        Hola Mundo
      </Button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { loginOn: state.loginOn };
};

export default connect(
  mapStateToProps,
  null
)(Home);
