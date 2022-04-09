import {IOffer} from '../../types/offers';
import {toCapitalize, transferRatingToPercent} from '../../utils/utils';
import React from 'react';

function Card({offer, cardHandler, typeCard = 'cities'}: IOffer): JSX.Element {
  const {previewImage, price, type, title, rating} = offer;
  return (
    <article className={`${typeCard === 'cities' ? `${typeCard}__place-card` : `${typeCard}__card`} place-card`} onMouseOver={() => cardHandler}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className={`${typeCard}__image-wrapper place-card__image-wrapper`}>
        <a href="/">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="opopop"/>
        </a>
      </div>
      <div className={`${typeCard}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${transferRatingToPercent(rating)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{title}</a>
        </h2>
        <p className="place-card__type">{toCapitalize(type)}</p>
      </div>
    </article>
  );
}

export default Card;
