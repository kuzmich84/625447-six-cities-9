import {ICardProps} from '../types/offers';
import {ActionType} from '../types/action';

export const chooseCity = (city: string) => ({
  type: ActionType.CHOOSE_CITY,
  payload: city,
});

export const fetchOffers = (offers: ICardProps[]) => ({
  type: ActionType.FETCH_OFFERS,
  payload: offers,
});
