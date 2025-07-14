export type TRatingApi = {
  kp?: number | null;
  imdb?: number | null;
  filmCritics?: number | null;
  russianFilmCritics?: number | null;
  await?: number | null;
};

export type TPremiereApi = {
  world: string | null;
  russia: string | null;
};

export type TPosterApi = {
  url: string | null;
};

export type TFactApi = {
  value: string;
  spoiler: boolean;
};

export type TGenreApi = {
  name: string;
};

export type TTrailer = {
  url: string;
};

export type TVideos = {
  trailers: TTrailer[];
};

export type TCountryApi = {
  name: string;
};

export type TPersonApi = {
  id: number;
  photo: string | null;
  name: string | null;
  description: string | null;
  profession: string;
  enProfession: string;
};

export type TBudgetApi = {
  value: number;
  currency: string;
};

export type TSimilarMovieApi = {
  id: number;
  name: string;
  poster: {
    url: string | null;
  };
  rating: TRatingApi;
  year: number;
};

export type TReleaseYearsApi = {
  start: number;
  end: number;
};

export type TFees = {
  world?: TBudgetApi;
  russia?: TBudgetApi;
};

export interface TFilmApi {
  id: number;
  name: string | null;
  alternativeName: string | null;
  rating: TRatingApi;
  description: string | null;
  premiere?: TPremiereApi;
  filmDistribution?: {
    budget?: {
      value: number;
      currency: string;
    };
    premierRussia?: string;
    premierWorld?: string;
  };
  year: number;
  poster?: TPosterApi;
  facts?: TFactApi[] | null;
  genres: TGenreApi[] | null;
  countries: TCountryApi[] | null;
  persons?: TPersonApi[];
  budget?: TBudgetApi;
  similarMovies?: TSimilarMovieApi[];
  movieLength: number | null;
  ageRaiting: number | null;
  releaseYears: TReleaseYearsApi[] | null;
  fees?: TFees;
  videos?: TVideos;
}

export interface TFilmApiLimitReposponse {
  docs: TFilmApi[];
}
