import {Dispatch} from '@reduxjs/toolkit';
import {Actions, ThunkActionResult} from '../types/action';
import {getOffersUtils} from '../utils/utils';
import {APIRoute, AuthorizationStatus} from '../types/const';
import {chooseCity, fetchOffers, isLoadData, requireAuthorization} from './action';
import {ICardProps} from '../types/offers';
import {IAuthData} from '../types/auth';
import {dropToken, saveToken, Token} from '../api/token';

export const fetchOffersByCity = (city: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(isLoadData(true));
    const {data} = await api.get<ICardProps[]>(APIRoute.Hotels);
    dispatch(fetchOffers(getOffersUtils(data, city)));
    await dispatch(isLoadData(false));
  }
);

export const changeCity = (city: string) => (
  (dispatch: Dispatch<Actions>) => {
    dispatch(chooseCity(city));
  }
);

export const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  }
);

export const loginAction = ({email, password}: IAuthData): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    const {data: {token}} = await api.post<{ token: Token }>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

export const logoutAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);
