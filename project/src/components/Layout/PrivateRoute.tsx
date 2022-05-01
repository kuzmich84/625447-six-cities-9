import React from 'react';
import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../types/const';
import {useSelector} from 'react-redux';
import {IOffersState} from '../../types/state';


type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useSelector((state: IOffersState) => state.authorizationStatus);
  const {children} = props;

  if (authorizationStatus === AuthorizationStatus.NoAuth || AuthorizationStatus.Unknown) {
    return <Navigate to="/login" replace/>;
  }
  return children;
}

export default PrivateRoute;
