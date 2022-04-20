import React from 'react';
import {IListCityProps} from '../../types/offers';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {changeCity, fetchOffersByCity} from '../../store/action-creators';

function ListCity({cities, currentCity}: IListCityProps): JSX.Element {

  const dispatch = useDispatch();
  const clickCityHandler = (event: React.MouseEvent<HTMLAnchorElement>, city: string) => {
    event.preventDefault();
    dispatch(changeCity(city));
    dispatch(fetchOffersByCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city} className="locations__item">
          <Link className={`locations__item-link tabs__item ${city === currentCity ? ' tabs__item--active':''}`} to={`${city}`} onClick={(e) => clickCityHandler(e, city)}>
            <span>{city}</span>
          </Link>
        </li>))}
    </ul>
  );
}

export default ListCity;
