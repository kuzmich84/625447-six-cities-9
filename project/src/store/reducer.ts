import {Actions, ActionType} from '../types/action';
import {IOffersState} from '../types/state';
import {AuthorizationStatus} from '../types/const';

const initialState: IOffersState = {
  city: 'Paris',
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

export const offerReducer = (state: IOffersState = initialState, action: Actions): IOffersState => {
  switch (action.type) {
    case ActionType.CHOOSE_CITY:
      return {...state, city: action.payload};
    case ActionType.FETCH_OFFERS:
      return {...state, offers: action.payload};
    case ActionType.REQUIRE_AUTHORIZATION:
      return <IOffersState>{...state, authorizationStatus: action.payload};
    case ActionType.IS_LOAD_DATA:
      return {...state, isDataLoaded: action.payload};
    default:
      return state;
  }
};
