import './App.scss';
import './index.scss';
import { Movies } from './presenters/Movies/Movies';
import { Route, Router, useLocation } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Search } from './presenters/Search/Search';
import { Favorites } from './presenters/Favorites/Favorites';
import { Film } from './presenters/Film/Film';
import { useEffect } from 'react';
import { getFavoritesIdsThunk } from './features/Favorites/thunk';
import { useDispatch } from './services/store';
import { Main } from './presenters/Main/Main';
import { NotFound } from './pages/NotFound/NotFound';
import { FilmModal } from './presenters/FilmModal/FilmModal';

function App() {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoritesIdsThunk());
  }, [dispatch]);

  const backgroundLocation = location.state?.background;

  console.log(backgroundLocation);
  return (
    <>
      <Routes location={backgroundLocation || location}>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path={'/films'} element={<Movies></Movies>}></Route>
        <Route path='/films/detail/:id' element={<Film></Film>}></Route>
        <Route path='/films/:id' element={<FilmModal></FilmModal>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='/favorites' element={<Favorites></Favorites>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route path='/films/:id' element={<FilmModal></FilmModal>}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
