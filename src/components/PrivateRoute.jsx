import React from 'react';
import { Route, Redirect } from 'react-router-dom'


let PrivateRoute = ({
  component,
  targetPath,
  isAuthorized,
  loginPath,
  ...rest
}) => (<Route exact render={(props) => (
        isAuthorized ?
        component() :
        <Redirect to={loginPath} />)} path={targetPath} />
      )


export default PrivateRoute
