import {Dispatch} from '@reduxjs/toolkit';
import {Actions, ActionType} from '../types/action';
import {getOffersUtils} from '../utils/utils';
import {offers} from '../mocks/offers';

export const fetchOffersByCity = (city: string) => (
  (dispatch: Dispatch<Actions>) => {
    dispatch({type: ActionType.FETCH_OFFERS, payload: getOffersUtils(offers, city)});
  }
);

export const changeCity = (city: string) => (dispatch: Dispatch<Actions>) => {
  dispatch({type: ActionType.CHOOSE_CITY, payload: city});
};
