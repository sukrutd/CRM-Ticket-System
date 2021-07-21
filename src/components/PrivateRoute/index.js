import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import DefaultLayout from 'layout/DefaultLayout';

const isAuth = true;

const PrivateRoute = ({ children, ...rest }) => {
  return <Route render={() => (isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to='/' />)} {...rest} />;
};

export default PrivateRoute;
