import { useSelector, useDispatch } from "../../services/store";
import { FilmPage } from "../../pages/Film/FilmPage";
import { getFavouritesIds } from "../../features/Favorites/FavoritesSlice";
import { getCurrentFilm } from "../../features/Film/FilmSlice";
import { getFilmByIdThunk } from "../../features/Film/thunk";
import { getIsLoading } from "../../features/Film/FilmSlice";
import { Loader } from "../../shared/ui/Loader/Loader";
import { postFavoriteIdThunk } from "../../features/Favorites/thunk";
import { deleteFavouriteIdThunk } from "../../features/Favorites/thunk";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Film = () => {
  const dispatch = useDispatch();

  const currentFilm = useSelector(getCurrentFilm);
  const isLoad = useSelector(getIsLoading);
  const favoriteIds = useSelector(getFavouritesIds);

  const isInFavorites = favoriteIds.some((id) => id === currentFilm?._id);

  const { id } = useParams();

  useEffect(() => {
    if ((id?.toString() !== currentFilm?._id.toString()) && id) {
      dispatch(getFilmByIdThunk(id));
    } 
  }, [dispatch, id]);

  const onChangeFavourites = (id: string) => {
    if (favoriteIds.some((favId) => id === favId)) {
      dispatch(deleteFavouriteIdThunk(id));
    } else {
      dispatch(postFavoriteIdThunk(id));
    }
  };

  if (isLoad) {
    return <Loader></Loader>;
  }

  return currentFilm ? (
    <FilmPage
      film={currentFilm}
      isInFavourites={isInFavorites}
      onChangeFavourites={onChangeFavourites}
    ></FilmPage>
  ) : (
    null
  );
};
