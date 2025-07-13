import type { TInfiniteScrollProps } from "../../widgets/GalleryInfinite/type";
import type { FilmCardProps } from "../../shared/ui/FilmCard/type";
import type {
  TInputs,
  TDropdowns,
  TNumberInputs,
  TDropdownsWithScroll,
} from "../../widgets/Filter/type";

export type TRange = {
  id: string;
  value: {
    from: string;
    to: string;
  }
}

export type TValue = {
  id: string;
  value: string;
}

type TFilterData = {
  genres: string[],
  maxYear: number;
  minYear: number;
  minRating: number;
  maxRating: number;
}

type TIds = {
  yearId: string,
  ratingId: string,
  genreId: string;
}

export interface MoviesPageProps {
  films: FilmCardProps[];
  infiniteScrollProps: TInfiniteScrollProps;
  filterData: TFilterData,
  ids: TIds,
  onSubmitFilters: (
    values: TValue[],
    ranges: TRange[],
  ) => void;
}
