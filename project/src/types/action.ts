import {ICardProps} from './offers';

export enum ActionType {
  CHOOSE_CITY = 'CHOOSE_CITY',
  FETCH_OFFERS = 'FETCH_OFFERS',
}

export interface IChooseCity {
  type: ActionType.CHOOSE_CITY,
  payload: string,
}

export interface IFetchOffers {
  type: ActionType.FETCH_OFFERS,
  payload: ICardProps[]
}

export type Actions = IChooseCity | IFetchOffers
