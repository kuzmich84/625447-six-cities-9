import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import {offerReducer} from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createStore(offerReducer, composeWithDevTools(applyMiddleware(thunk)));
