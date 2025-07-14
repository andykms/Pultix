import { SearchPage } from "../../pages/Search/SearchPage";
import { useSelector, useDispatch } from "../../services/store";
import { useEffect } from "react";
import {
  clearSearchingFilms,
  getHasMoreSearched,
  getSearchFilms,
} from "../../features/Film/FilmSlice";
import { getSearchFilmsThunk } from "../../features/Film/thunk";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Loader } from "../../shared/ui/Loader/Loader";

export const Search = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const [currentQuery, setCurrentQuery] = useState<string | null>();

  const films = useSelector(getSearchFilms);

  const hasMore = useSelector(getHasMoreSearched);


  useEffect(() => {
    console.log('cleared')
    dispatch(clearSearchingFilms());
    setCurrentQuery(searchParams.get("query"));
  }, [dispatch, searchParams]);


  useEffect(()=>{
    if (currentQuery) dispatch(getSearchFilmsThunk(currentQuery));
    return ()=>{

    }
  }, [currentQuery])

  const onNext = () => {
    if (currentQuery) dispatch(getSearchFilmsThunk(currentQuery));
  };

  return (
    <SearchPage
      searchValue={currentQuery ? currentQuery : ""}
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
