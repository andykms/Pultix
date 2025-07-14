import { useSelector, useDispatch } from "../../services/store";
import { FavoritesPage } from "../../pages/Favorites/FavoritesPage";
import {
  getFavouritesFilmsThunk,
  getFavoritesIdsThunk,
} from "../../features/Favorites/thunk";
import {
  getFavouritesFilms,
  getFavouritesIds,
  getHasMore,
} from "../../features/Favorites/FavoritesSlice";
import { useEffect } from "react";
import { Loader } from "../../shared/ui/Loader/Loader";

export const Favorites = () => {
  const dispatch = useDispatch();

  const favoriteIds = useSelector(getFavouritesIds);
  const favorites = useSelector(getFavouritesFilms);
  const hasMore = useSelector(getHasMore);

  useEffect(() => {
    dispatch(getFavoritesIdsThunk());
    dispatch(
      getFavouritesFilmsThunk({ favorites, allFavouritesIds: favoriteIds })
    );
  }, [dispatch]);

  const onNext = () => {
    dispatch(
      getFavouritesFilmsThunk({ favorites, allFavouritesIds: favoriteIds })
    );
  };

  return (
    <FavoritesPage
      favorites={favorites}
      infiniteScrollProps={{
        dataLength: favorites.length,
        next: onNext,
        hasMore,
        loader: <Loader></Loader>,
      }}
    ></FavoritesPage>
  );
};
