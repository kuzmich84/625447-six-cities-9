import React  from 'react';
import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../types/const';


type PrivateRouteProps = {
  children: JSX.Element;
  authorizationStatus: string;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  if (authorizationStatus===AuthorizationStatus.NoAuth) {
    return <Navigate to="/login" replace/>;
  }
  return children;
}

export default PrivateRoute;
