import {ICardProps} from '../types/offers';

export const transferRatingToPercent = (rating: number) => Math.round(rating) * 100 / 5;


export const setDateToString = (datestring: number) => {
  const date = new Date(datestring);

  return `${date.toLocaleString('en', {month: 'long'})} ${date.getFullYear()}`;
};

export const getRandomNumber = (min: number, max: number) => Math.round(min + Math.random() * (max - min));


export const toCapitalize = (string: string) => string[0].toUpperCase() + string.slice(1);


export const extend = (a: object, b: object) => Object.assign({}, a, b);

export const getOffersUtils = (offers: ICardProps[], city: string) => offers.filter((item) => item.city.name === toCapitalize(city));

export const getCities = (offers: ICardProps[]) => [...new Set(offers.map((offer) => offer.city.name))].sort();

export const toCamelCase = (s: string) => s.replace(/([-_][a-z])/ig, (symbol) => (
  symbol.toUpperCase()
    .replace('-', '')
    .replace('_', '')
));

export const shuffle = (array: []) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};


export const getOfferFavoriteStatus = (isFavorite: boolean) => {
  if (isFavorite) {
    return 0;
  } else {
    return 1;
  }
};

export function getOffer(array: ICardProps[], idx='0'):ICardProps {
  return array.filter((item) => item.id === parseInt(idx, 10))[0];
}

// export const newList = (oldList:[], newObject:{id: number}) => {
//   return oldList.map((object) => {
//     if (object.id === newObject.id) {
//       return newObject;
//     }
//     return object;
//   });
// };
//
// export const deleteObject = (array:[], object:{id: number}) => array.filter((obj) => obj.id !== object.id);
