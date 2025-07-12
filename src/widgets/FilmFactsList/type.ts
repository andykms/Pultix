export type TFilmType = {
  value: string;
  spoiler: boolean;
}

export interface FilmFactsListProps {
  facts: TFilmType[];
}