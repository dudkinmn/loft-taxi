import React from 'react';
import { Route, Redirect } from 'react-router-dom'


let PrivateRoute = ({
    component,
    targetPath,
    isAuthorized,
    loginPath,
    ...rest
  }) => (
    <>
     {
        isAuthorized ? (
            <>
            {console.log('sdsddsdsds')}
            <Route render={() => component} path={targetPath}/>
            </>
        ) : (
            <>
               <Redirect to={loginPath} />
               {console.log('redirect')}

            </>
        )
      }
    </>
  );

  
export default PrivateRoute