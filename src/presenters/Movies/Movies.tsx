import { MoviesPage } from "../../pages/Movies/MoviesPage";
import { useDispatch, useSelector } from "../../services/store";
import { useSearchParams } from "react-router-dom";
import type { TValue, TRange } from "../../pages/Movies/type";
import {
  clearFilms,
  getHasMore,
  getFilms,
} from "../../features/Film/FilmSlice";
import { getFilmsBySearchThunk } from "../../features/Film/thunk";
import { type TSearchParam, createSearchUrl } from "../../api/apiSearchParams";
import { Loader } from "../../shared/ui/Loader/Loader";

/**Импортируем ключи для searchParams (genre.names...) */
import { SEARCH_PARAMS, SEARCH_OPERATIONS } from "../../api/apiSearchParams";
import { useState } from "react";
import { useEffect } from "react";
import { genres } from "../../shared/lib/utilsData/genres";
import type { TFilm } from "../../types/views/RegistrationPage";
import { setCurrentFilm } from "../../features/Film/FilmSlice";

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  /**id для сопоставления значений из формы и требуемых нам значений */
  const ids = {
    yearId: "year",
    ratingId: "rating",
    genreId: "genre",
  };

  /**Возвращение url из searchParameters */
  const getParamUrl = () => {
    const params: TSearchParam[] = [];
    const year = searchParams.getAll(SEARCH_PARAMS.YEAR);
    const rating = searchParams.getAll(SEARCH_PARAMS.RATING);
    const genres = searchParams.getAll(SEARCH_PARAMS.GENRE);
    if (year.length > 0) {
      params.push({
        value: year,
        key: SEARCH_PARAMS.YEAR,
      });
    }
    if (rating.length > 0) {
      params.push({
        value: rating,
        key: SEARCH_PARAMS.RATING,
      });
    }
    if (genres.length > 0) {
      params.push({
        value: genres,
        key: SEARCH_PARAMS.GENRE,
      });
    }
    return createSearchUrl(params);
  };

  /**Стейт текущего url */

  useEffect(()=>{
    dispatch(clearFilms())
    dispatch(
      getFilmsBySearchThunk({ searchParams: getParamUrl(), limit: 50 })
    );
  }, [searchParams])


  /**Функция отправки экшена для подзагрузки фильмов*/
  const addFilms = () =>
    dispatch(
      getFilmsBySearchThunk({ searchParams: getParamUrl(), limit: 50 })
    );

  /**Коллбэк при нажатии на кнопку  применения фильтров*/
  const onSubmit = (values: TValue[], ranges: TRange[]) => {
    console.log("VALUES", values);
    console.log("RANGES", ranges);
    /**Сначала очищаем все фильмы из хранилища */
    dispatch(clearFilms());
    /**Преобразовываем полученные из формы (окно филтьтров) значения */
    const searchParams: { [key in string]: string[] } = {};
    values.forEach((item) => {
      const { id, value } = item;
      switch (id) {
        case ids.genreId:
          if (!searchParams[SEARCH_PARAMS.GENRE]) {
            searchParams[SEARCH_PARAMS.GENRE] = [];
          }
          searchParams[SEARCH_PARAMS.GENRE].push(
            `${SEARCH_OPERATIONS.INCLUDE}${value}`
          );
          break;
      }
    });
    ranges.forEach((item) => {
      const { id, value } = item;
      switch (id) {
        case ids.ratingId:
          if (!searchParams[SEARCH_PARAMS.RATING]) {
            searchParams[SEARCH_PARAMS.RATING] = [];
          }
          searchParams[SEARCH_PARAMS.RATING].push(`${value.from}-${value.to}`);
          break;
        case ids.yearId:
          if (!searchParams[SEARCH_PARAMS.YEAR]) {
            searchParams[SEARCH_PARAMS.YEAR] = [];
          }
          searchParams[SEARCH_PARAMS.YEAR].push(`${value.from}-${value.to}`);
          break;
      }
    });
    /**Проставляем новые параметры в searchParams */
    setSearchParams(searchParams);

    /**Обновляем стейт текущего url */
  };

  /**Получение фильмов */

  const films = useSelector(getFilms);
  /**Получение разрашения на подзагрудке фильмов (пропс для бесконечного скролла) */

  const hasMore = useSelector(getHasMore);

  /**Коллбэк для бесконечного скролла */
  const onNext = () => {
    addFilms();
  };

  /**Проставляем в слайс текущий фильм при переходе на страницу фильма */

  const onClickLink = (film: TFilm) => {
    console.log('set new current film!')
    dispatch(setCurrentFilm(film));
  }

  return (
    <MoviesPage
      films={films.map((item)=> {return {...item, onClick: onClickLink}})}
      ids={ids}
      infiniteScrollProps={{
        hasMore: hasMore,
        dataLength: films.length,
        next: onNext,
        loader: <Loader></Loader>,
      }}
      filterData={{
        genres,
        maxRating: 10,
        minRating: 0,
        maxYear: new Date().getFullYear(),
        minYear: 1990,
      }}
      onSubmitFilters={onSubmit}
    ></MoviesPage>
  );
};
