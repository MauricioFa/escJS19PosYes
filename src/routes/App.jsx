import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import LogUp from '../containers/LogUp';
import NotFound from '../containers/NotFound';
import RecoverPassword from '../containers/RecoverPassword';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/index.html' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/logUp' component={LogUp} />
        <Route exact path='/recoverPw' component={RecoverPassword} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
