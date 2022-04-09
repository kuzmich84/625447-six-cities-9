import Card from '../Card/Card';
import {IOffers} from '../../types/offers';
import {useState} from 'react';

function ListOffer({offers}: IOffers) {
  const [, setId] = useState<number>();

  function cardHandler(id:number) {
    setId(id);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card cardHandler={cardHandler} key={offer.id} offer={offer}/>)}
    </div>
  );
}

export default ListOffer;
