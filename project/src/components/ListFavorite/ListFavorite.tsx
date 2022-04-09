import React from 'react';
import {IOffers} from '../../types/offers';
import {getCities, getOffersUtils, toCapitalize} from '../../utils/utils';

function ListFavorite({offers}: IOffers) {

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
              <article className="favorites__card place-card" key={offer.id}>
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>
                <div className="favorites__image-wrapper place-card__image-wrapper">
                  <a href="/">
                    <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place"/>
                  </a>
                </div>
                <div className="favorites__card-info place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;{offer.price}</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                      <svg className="place-card__bookmark-icon" style={{fill: 'none'}} width="18" height="19">
                        <use xlinkHref="#icon-bookmark"/>
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: '100%'}}/>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="/">{offer.title}</a>
                  </h2>
                  <p className="place-card__type">{toCapitalize(offer.type)}</p>
                </div>
              </article>
            ))}

          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListFavorite;
