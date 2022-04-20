import {ICardProps} from './offers';
import {AuthorizationStatus} from './const';

export interface IOffersState {
  city: string,
  offers: ICardProps[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}
