export type TFilm = {
  _id: string;
  posterUrl?: string;
  title: string;
  raiting?: number;
  maxRaiting?: number;
  description?: string;
  year?: number;
  genres?: string[];
  ageRaiting?: number;
  countries?: string[];
  movieLength?: number;
};

export interface FilmModalProps {
  film: TFilm;
  onChangeInFavourites: (id: string) => void;
  isInFavourites: boolean;
}
