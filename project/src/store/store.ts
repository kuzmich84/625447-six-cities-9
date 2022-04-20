import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import {offerReducer} from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createAPI} from '../api/api';
import {requireAuthorization} from './action';
import {AuthorizationStatus} from '../types/const';

const api = createAPI(() => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)));

export const store = createStore(offerReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));
