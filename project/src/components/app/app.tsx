import MainPage from '../MainPage/MainPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from '../404/404';
import LoginPage from '../LoginPage/LoginPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import RoomPage from '../RoomPage/RoomPage';
import PrivateRoute from '../Layout/PrivateRoute';
import {AppRoute, AuthorizationStatus} from '../../types/const';
import {IOffers} from '../../types/offers';

function App({offers}:IOffers): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />}/>
        <Route path={AppRoute.Login} element={<LoginPage/>}/>
        <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritesPage offers={offers}/></PrivateRoute> }/>
        <Route path={`${AppRoute.Offer}/:id`} element={<RoomPage offers={offers}/>}/>
        <Route path={AppRoute.All} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

