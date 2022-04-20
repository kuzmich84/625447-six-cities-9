import {ICardProps} from '../types/offers';
import {ActionType} from '../types/action';

export const chooseCity = (city: string) => ({
  type: ActionType.CHOOSE_CITY,
  payload: city,
} as const);

export const fetchOffers = (offers: ICardProps[]) => ({
  type: ActionType.FETCH_OFFERS,
  payload: offers,
} as const);

export const requireAuthorization = (authStatus: string) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: authStatus,
} as const);

export const isLoadData = (status: boolean) => ({
  type: ActionType.IS_LOAD_DATA,
  payload: status,
} as const);
