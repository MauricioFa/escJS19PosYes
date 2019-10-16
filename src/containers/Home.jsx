import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
  const { loginOn } = props;
  return (
    <>
      {loginOn ?
        (<h1>Home login ON</h1>) :
        (<h1>Home login OFF</h1>)}
    </>
  );
};

const mapStateToProps = (state) => {
  return { loginOn: state.loginOn };
};

export default connect(mapStateToProps, null)(Home);
