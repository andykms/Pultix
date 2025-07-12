export type TActor = {
  _id: string;
  photoUrl: string;
  name: string;
  description: string;
}

export type TFact = {
  value: string,
  spoiler: boolean,
}

export type TFees = {
  country: string;
  value: number;
  currency: string;
}

export type TBudget = {
  value: number;
  currency: string;
}

export type FilmDistribution = {
  fees?: TFees[];
  budget?: TBudget;
  premierWorld?: string;
  premierRussia: string;
}

export type TFilm = {
  _id: string,
  posterUrl: string,
  title: string,
  raiting?: number,
  year?: number,
  genres?: string[],
  description?: string,
  actors?: TActor[],
  filmCrew?: TActor[],
  facts?: TFact[],
  filmDistribution?: FilmDistribution;
  trailerUrl?: string;
}

export interface FilmPageProps {
  film: TFilm;
  isInFavourites: boolean;
}