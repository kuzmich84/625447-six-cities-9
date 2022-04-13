
import {Actions, ActionType} from '../types/action';
import {IOffersState} from '../types/state';

const initialState: IOffersState = {
  city: 'Paris',
  offers: [],
};

export const offerReducer = (state: IOffersState = initialState, action: Actions): IOffersState => {
  switch (action.type) {
    case ActionType.CHOOSE_CITY:
      return {...state, city: action.payload};
    case ActionType.FETCH_OFFERS:
      return {...state, offers: action.payload};
    default:
      return state;
  }
};
