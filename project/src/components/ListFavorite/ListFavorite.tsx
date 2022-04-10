import React, {useState} from 'react';
import {IOffers} from '../../types/offers';
import {getCities, getOffersUtils} from '../../utils/utils';
import Card from '../Card/Card';

function ListFavorite({offers}: IOffers) {
  const [, setId] = useState<number>();

  function cardHandler(id:number) {
    setId(id);
  }
  return (
    <ul className="favorites__list">
      {getCities(offers).map((city) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {getOffersUtils(offers, city).map((offer)=>(
              <Card cardHandler={cardHandler} key={offer.id} offer={offer}  typeCard='favorites'/>
            ))}

          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListFavorite;
