export type TCritics = {
  kp?: number;
  imdb?: number;
  tmdb?: number;
  filmCritics?: number;
  russianFilmCritics?: number;
  await?: number;
};

export interface RatingInfoProps {
  critics: TCritics;
}
