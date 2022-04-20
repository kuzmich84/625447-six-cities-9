import {ICardProps} from './offers';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {IOffersState} from './state';


export enum ActionType {
  CHOOSE_CITY = 'CHOOSE_CITY',
  FETCH_OFFERS = 'FETCH_OFFERS',
  REQUIRE_AUTHORIZATION = 'REQUIRE_AUTHORIZATION',
  IS_LOAD_DATA = 'IS_LOAD_DATA',
}

export interface IChooseCity {
  type: ActionType.CHOOSE_CITY,
  payload: string,
}

export interface IFetchOffers {
  type: ActionType.FETCH_OFFERS,
  payload: ICardProps[]
}

export interface IAuth {
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: string,
}

export interface IIsLoadData {
  type: ActionType.IS_LOAD_DATA,
  payload: boolean,
}


export type Actions = IChooseCity | IFetchOffers | IAuth | IIsLoadData;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, IOffersState, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<IOffersState, AxiosInstance, Actions>;
