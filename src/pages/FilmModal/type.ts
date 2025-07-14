import type { TFilm } from "../../widgets/FilmModal/type";

export interface FilmModalPageProps {
  film: TFilm;
  onChangeInFavourites: (id: string)=>void;
  isInFavourites: boolean;
}