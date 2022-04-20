import Header from '../Layout/Header';
import ListOffer from '../ListOffer/ListOffer';
import Map from '../Map/Map';
import {useSelector} from 'react-redux';
import {IOffersState} from '../../types/state';
import ListCity from '../ListCity/ListCity';
import {Cities} from '../../mocks/constants';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import {IOffers} from '../../types/offers';

function MainPage({offers}:IOffers): JSX.Element {

  const city = useSelector((state: IOffersState) => state.city);
  const isDataLoaded = useSelector((state: IOffersState) => state.isDataLoaded);


  const markers = offers.map((offer)=>offer.location);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ListCity cities={Cities} currentCity={city}/>
          </section>
        </div>
        {
          isDataLoaded
            ? <LoadingSpinner/>
            :
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offers.length} places to stay in {city}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0}>
                  Popular
                      <svg className="places__sorting-arrow" width="7" height="4">
                        <use xlinkHref="#icon-arrow-select"/>
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                      <li className="places__option" tabIndex={0}>Price: low to high</li>
                      <li className="places__option" tabIndex={0}>Price: high to low</li>
                      <li className="places__option" tabIndex={0}>Top rated first</li>
                    </ul>
                  </form>
                  <ListOffer offers={offers}/>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map city={offers[0].city.location} points={markers}/>
                  </section>
                </div>
              </div>
            </div>
        }
      </main>
    </div>
  );
}

export default MainPage;
