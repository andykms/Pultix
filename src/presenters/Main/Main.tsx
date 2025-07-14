import { useSelector, useDispatch } from '../../services/store';
import { MainPage } from '../../pages/Main/MainPage';
import { getShowCaseFilmsThunk } from '../../features/Film/thunk';
import { getFavouritesFilmsThunk } from '../../features/Favorites/thunk';
import { getShowcaseFavourites } from '../../features/Favorites/FavoritesSlice';
import { getShowcaseFilms } from '../../features/Film/FilmSlice';
import { getFavouritesIds } from '../../features/Favorites/FavoritesSlice';
import { useEffect } from 'react';

export const Main = () => {
  const dispatch = useDispatch();

  const filmsShowcase = useSelector(getShowcaseFilms);

  const favoritesShowcase = useSelector(getShowcaseFavourites);

  const favoritesIds = useSelector(getFavouritesIds);

  useEffect(() => {
    dispatch(
      getFavouritesFilmsThunk({
        favorites: favoritesShowcase,
        allFavouritesIds: favoritesIds,
      }),
    );
  }, [favoritesIds]);

  useEffect(() => {
    if (filmsShowcase.length <= 0) {
      dispatch(getShowCaseFilmsThunk());
    }
    return () => {};
  }, [dispatch]);
  return <MainPage films={filmsShowcase} favourites={favoritesShowcase}></MainPage>;
};
