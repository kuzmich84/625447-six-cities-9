import Header from '../Layout/Header';
import ListFavorite from '../ListFavorite/ListFavorite';
import {IOffers} from '../../types/offers';

function FavoritesPage({offers}: IOffers): JSX.Element {
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ListFavorite offers={offers}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default FavoritesPage;
