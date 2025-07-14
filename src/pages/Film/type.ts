import type { TFilm } from "../../types/views/RegistrationPage";

export interface FilmPageProps {
  film: TFilm;
  isInFavourites: boolean;
  onChangeFavourites: (id: string)=>void;
}