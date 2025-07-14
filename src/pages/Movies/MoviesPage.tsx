import { GalleryInfinite } from "../../widgets/GalleryInfinite/GalleryInfinite";
import { Filter } from "../../widgets/Filter/Filter";
import type { MoviesPageProps } from "./type";
import type {
  TInputs,
  TDropdowns,
  TNumberInputs,
  TDropdownsWithScroll,
} from "../../widgets/Filter/type";
import { createDropdownParams } from "../../shared/lib/utilsFunction/createDropdownParams";
import type { TValue, TRange } from "./type";
import styles from "./MoviesPage.module.scss";
import { Link } from "react-router-dom";
import { SearchField } from "../../widgets/SearchField/SearchField";
import { FilmCardUI } from "../../shared/ui/FilmCard/FilmCard";
import { ButtonClose } from "../../shared/ui/ButtonClose/ButtonClose";
import { ButtonBack } from "../../shared/ui/ButtonBack/ButtonBack";

export const MoviesPage: React.FC<MoviesPageProps> = (
  props: MoviesPageProps
) => {
  const { filterData, films, infiniteScrollProps, onSubmitFilters, ids } =
    props;

  const numberInputs = [
    {
      valueMax: "",
      valueMin: "",
      placeholderMax: "",
      placeholderMin: "",
      maxLength: 3,
      minLength: 1,
      max: 10,
      min: 0,
      step: 0.1,
      title: "Рейтинг",
      id: ids.ratingId,
    },
    {
      valueMax: filterData.maxYear.toString(),
      valueMin: filterData.minYear.toString(),
      placeholderMax: "до",
      placeholderMin: "от",
      maxLength: 5,
      minLength: 5,
      max: filterData.maxYear,
      min: filterData.minRating,
      step: 1,
      title: "Год",
      id: ids.yearId,
    },
  ];

  const dropdowns = [
    {
      title: "Жанры",
      params: createDropdownParams(filterData.genres),
      id: ids.genreId,
    },
  ];

  const onSubmit = (
    filtersCount: number,
    inputs: TInputs,
    dropdowns: TDropdowns,
    dropdownsWithScroll: TDropdownsWithScroll,
    numberInputs: TNumberInputs
  ) => {
    const dropdownGenres = dropdownsWithScroll.find(
      (item) => item.id === ids.genreId
    );
    const inputRating = numberInputs.find((item) => item.id === ids.ratingId);
    const inputYear = numberInputs.find((item) => item.id === ids.yearId);

    const values: TValue[] = [];
    const ranges: TRange[] = [];

    if (inputYear) {
      if (inputYear.valueMax.length > 0 && inputYear.valueMin.length > 0) {
        ranges.push({
          id: ids.yearId,
          value: {
            from: inputYear.valueMin,
            to: inputYear.valueMax,
          },
        });
      }
    }
    if (inputRating) {
      if (inputRating.valueMax.length > 0 && inputRating.valueMin.length > 0) {
        ranges.push({
          id: ids.ratingId,
          value: {
            from: inputRating.valueMin,
            to: inputRating.valueMax,
          },
        });
      }
    }
    if (dropdownGenres) {
      dropdownGenres.params.forEach((dropdownParam) => {
        if (dropdownParam.isChoosen) {
          values.push({
            id: ids.genreId,
            value: dropdownParam.value,
          });
        }
      });
    }
    onSubmitFilters(values, ranges);
  };

  return (
    <div className={styles.movieContainer}>
      <div className={styles.navigation}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <ButtonBack onClose={() => {}}></ButtonBack>
        </Link>
        <SearchField searchValue=""></SearchField>
        <Filter
          onSubmit={onSubmit}
          width="300px"
          inputs={[]}
          numberInputs={numberInputs}
          dropdowns={[]}
          dropdownsWithScroll={dropdowns}
        ></Filter>
      </div>
      <div className={styles.films}>
        <GalleryInfinite
          CardType={FilmCardUI}
          title="Все фильмы"
          cardProps={films}
          InfiniteScrollProps={infiniteScrollProps}
        ></GalleryInfinite>
      </div>
    </div>
  );
};
