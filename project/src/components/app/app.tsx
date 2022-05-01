import MainPage from '../MainPage/MainPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from '../404/404';
import LoginPage from '../LoginPage/LoginPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import RoomPage from '../RoomPage/RoomPage';
import PrivateRoute from '../Layout/PrivateRoute';
import {AppRoute} from '../../types/const';
import {useSelector} from 'react-redux';
import {IOffersState} from '../../types/state';

function App(): JSX.Element {
  const offers = useSelector((state: IOffersState) => state.offers);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage offers={offers}/>}/>
        <Route path={AppRoute.Login} element={<LoginPage/>}/>
        <Route path={AppRoute.Favorites} element={<PrivateRoute><FavoritesPage offers={offers}/></PrivateRoute>}/>
        <Route path={`${AppRoute.Offer}/:id`} element={<RoomPage offers={offers}/>}/>
        <Route path={AppRoute.All} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

