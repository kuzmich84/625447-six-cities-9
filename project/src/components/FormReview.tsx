import React, {useState} from 'react';
import Star from './UI/Star';

function FormReview() {
  const [review, setReview] = useState<string>('');
  const [, setRating] = useState<string>();

  const reviewHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };

  function ratingHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setRating(event.target.value);

  }

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => <Star key={star} onChangeStar={ratingHandler} id={star}/>)}
      </div>
      <textarea onChange={reviewHandler} value={review} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default FormReview;
