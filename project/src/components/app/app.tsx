import MainPage from '../MainPage/MainPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from '../404/404';
import LoginPage from '../LoginPage/LoginPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import RoomPage from '../RoomPage/RoomPage';
import PrivateRoute from '../Layout/PrivateRoute';
import {AppRoute, AuthorizationStatus} from '../../types/const';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage count={351}/>}/>
        <Route path={AppRoute.Login} element={<LoginPage/>}/>
        <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><FavoritesPage/></PrivateRoute> }/>
        <Route path={`${AppRoute.Offer}/:id`} element={<RoomPage/>}/>
        <Route path={AppRoute.All} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

