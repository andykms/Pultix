import { SearchPage } from '../../pages/Search/SearchPage';
import { useSelector, useDispatch } from '../../services/store';
import { useEffect } from 'react';
import {
  clearSearchingFilms,
  getHasMoreSearched,
  getSearchFilms,
} from '../../features/Film/FilmSlice';
import { getSearchFilmsThunk } from '../../features/Film/thunk';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { Loader } from '../../shared/ui/Loader/Loader';
import { getSearchPage } from '../../features/Film/FilmSlice';

export const Search = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const [currentQuery, setCurrentQuery] = useState<string | null>();

  const films = useSelector(getSearchFilms);
  const page = useSelector(getSearchPage);

  const hasMore = useSelector(getHasMoreSearched);

  useEffect(() => {
    dispatch(clearSearchingFilms());
    setCurrentQuery(searchParams.get('query'));
  }, [dispatch, searchParams]);

  useEffect(() => {
    if (currentQuery) dispatch(getSearchFilmsThunk({ query: currentQuery, page, limit: 50 }));
    return () => {};
  }, [currentQuery]);

  const onNext = () => {
    if (currentQuery) dispatch(getSearchFilmsThunk({ query: currentQuery, page, limit: 50 }));
  };

  return (
    <SearchPage
      searchValue={currentQuery ? currentQuery : ''}
      films={films}
      infiniteScrollProps={{
        loader: <Loader></Loader>,
        dataLength: films.length,
        next: onNext,
        hasMore,
      }}
    ></SearchPage>
  );
};
