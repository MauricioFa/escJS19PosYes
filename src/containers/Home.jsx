import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
